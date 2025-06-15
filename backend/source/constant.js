import bcrypt from 'bcrypt';
import Cryptr from 'cryptr';
import * as typ from '../source/utils/types.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();
import fs from 'fs';
import path from 'path';

const cryptr = new Cryptr(process.env.encrypt_Key);
const privateKeyPath = path.resolve(process.cwd(), process.env.PRIVATE_KEY_PATH);
const privateKey = fs.readFileSync(privateKeyPath, 'utf8');

// This file contains constants used across the application
// It is important to keep sensitive information like passwords secure
// Do not hardcode passwords or sensitive data in your codebase
    
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

// This function compares a plain text password with a hashed password
// It returns a promise that resolves to true if the passwords match, false otherwise

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

export const generateUserToken = (datas) => {
    const data = { ...datas };
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

export const verifyUserToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, privateKey, { algorithms: ['RS256'] }, (err, decoded) => {
            if (err) {
                console.error("Error verifying token:", err);
                return reject(err);
            } else {
                return resolve(decoded);
            }
        });
    });
};