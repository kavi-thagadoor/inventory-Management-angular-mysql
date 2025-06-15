import bcrypt from 'bcrypt';
import Cryptr from 'cryptr';
import * as typ from '../source/utils/types.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
import fs from 'fs';
import path from 'path';
import { decode } from 'punycode';

const cryptr = new Cryptr(process.env.encrypt_Key);
const privateKeyPath = path.resolve(process.cwd(), process.env.PRIVATE_KEY_PATH);
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

const publicKeyPath = path.resolve(process.cwd(), process.env.PUBLIC_KEY_PATH);
const publicKey = fs.readFileSync(publicKeyPath, 'utf8');

    
const saltRounds = 2;
export const hashUserPwd = (pwd) => {
    return new Promise((resolve, reject) => {
       bcrypt.hash(pwd, saltRounds, function(err, hash) {
            if (err) {
                console.error("Error", err);
                return reject(err);
            } else {
                return resolve(hash);
            }
        });
    });
};


export const compareUserPwd = (pwd, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(pwd, hash, function(err, result) {
            if (err) {
                console.error("Error comparing password:", err);
                return reject(err);
            } else {
                return resolve(result);
            }
        });
    });
};

export const encryptAndDecrypt = (text,action) => {
    if (action === typ.action.encrypt) {
        return cryptr.encrypt(text);
    }else if (action === typ.action.decrypt) {
        return cryptr.decrypt(text);
    } else {
        throw new Error('Invalid action. Use "encrypt" or "decrypt".');
    }
}

export const generateUserToken = (id,user) => {
    const data = { id,user };
    console.log(data)
    return new Promise((resolve, reject) => {
        jwt.sign(data, privateKey, { algorithm: 'RS256' }, (err, token) => {
            if (err) {
                console.error("Error generating token:", err);
                return reject(err);
            } else {
                return resolve(token);
            }
        });
    });
};

export const verifyUserToken = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(401).json({ status: 0, message: 'No token provided' });

        const token = authHeader.split(' ')[1];
        jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
            if (err) {
                console.error("Error verifying token:", err);
                return res.status(403).json({ status: 0, message: 'Invalid or expired token' });
            }
            req.user = decoded;
            next();
        });
    } catch (error) {
        console.error('Token verification error:', error.message);
        res.status(500).json({ status: 0, message: 'Internal server error' });
    }
};
