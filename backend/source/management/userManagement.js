import * as database from '../database/db.js';  
import * as typ from '../utils/types.js';
import * as cons from '../constant.js';

export let addUser = async (user) => {
    const hashedPassword = await cons.hashUserPwd(user.password);
    user.password = hashedPassword;
    return new Promise((resolve) => {
        const sql = 'INSERT INTO users SET ?';
        database.connection.query(sql, user, (err, result) => {
            if (err) {
                resolve({ 
                    status: typ.status.Failed,
                    message: 'Error', error: err.message 
                });
            }else{
            resolve({
                status: typ.status.Success,
                message: 'User added successfully',
                userId: result.insertId
            });
            }
        });
    });
};


export let getUserById = (users) => {
    return new Promise((resolve,reject) => {
         const { id } = users; 
        const sql = 'SELECT * FROM users WHERE id = ?';
        database.connection.query(sql, [id], (err, users) => {
            if (err) {
                reject({
                     status: typ.status.NotFound,
                     message: 'Error', error: err.message 
             });
            }
            if (!users || users.length === 0) {
                // No match found
                resolve({
                    status: typ.status.Failed,
                    message: 'Invalid username or password',
                });
            }

            // Success case
            resolve({
                status: typ.status.Success,
                message: 'User logged in successfully',
                data: users
            });
        });
    });
};

export const loginUser = async (users) => {
    const { username, password } = users;

    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM users WHERE username = ?';

        database.connection.query(sql, [username], async (err, result) => {
            if (err) {
                return reject({
                    status: typ.status.Failed,
                    message: 'Database error',
                    error: err.message
                });
            }

            if (!result || result.length === 0) {
                return resolve({
                    status: typ.status.Failed,
                    message: 'Invalid username or password',
                });
            }

            const user = result[0];

            try {
                const isMatch = await cons.compareUserPwd(password, user.password);

                if (!isMatch) {
                    return resolve({
                        status: typ.status.Failed,
                        message: 'Invalid username or password',
                    });
                }

                const tokenData = await cons.generateUserToken(user.id);

                resolve({
                    status: typ.status.Success,
                    message: 'User logged in successfully',
                    token: tokenData,
                });

            } catch (err) {
                reject({
                    status: typ.status.Failed,
                    message: 'Login failed',
                    error: err.message,
                });
            }
        });
    });
};
