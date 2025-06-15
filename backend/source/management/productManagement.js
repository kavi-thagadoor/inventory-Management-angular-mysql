import * as database from '../database/db.js';  
import * as typ from '../utils/types.js';
import * as cons from '../constant.js';

export let addProduct = (product) => {
    return new Promise((resolve) => {
        const sql = 'INSERT INTO products SET ?';
        database.connection.query(sql, product, (err, result) => {
            if (err) {
                resolve({ 
                    status: typ.status.Failed,
                    message: 'Error', error: err.message 
                });
            }
            resolve({
                status: typ.status.Success,
                message: 'Product added successfully',
            });
        });
    });
};


export let getProduct = (product) => {
    return new Promise((resolve,reject) => {
        const sql = 'SELECT * FROM products';
        database.connection.query(sql, (err, result) => {
            if (err) {
                reject({
                    status: typ.status.NotFound,
                    message: 'Error', error: err.message 
                    });
            }
            if (!result || result.length === 0) {
                // No match found
                resolve({
                    status: typ.status.NotFound,
                    datas: 'Products not found',
                });
            }
            resolve({
                status: typ.status.Success,
                datas: result
            });
        });
    });
};

export let getProductById = (product) => {
    return new Promise((resolve,reject) => {
         const { id } = product; 
        const sql = 'SELECT * FROM products WHERE id = ?';
        database.connection.query(sql, [id], (err, result) => {
            if (err) {
                reject({
                     status: typ.status.NotFound,
                     message: 'Error', error: err.message 
             });
            }
            if (!result || result.length === 0) {
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
                datas: result
            });
        });
    });
};

export const updateProduct = (req) => {
    return new Promise((resolve) => {
        const { id, ...updatedFields } = req; // extract id and fields from req.body

        const sql = 'UPDATE products SET ? WHERE id = ?';
        database.connection.query(sql, [updatedFields, id], (err, result) => {
            if (err) {
                resolve({
                    status: typ.status.Failed,
                    message: 'Error', error: err.message 
                });
            }
            resolve({
                status: typ.status.Success,
                message: result.affectedRows > 0 ? 'Product updated successfully' : 'No product found',
                affectedRows: result.affectedRows
            });
        });
    });
};

export const deleteProduct = (req) => {
    return new Promise((resolve) => {
        const { id } = req; 
        const sql = 'DELETE FROM products WHERE id = ?';
        database.connection.query(sql, [id], (err, result) => {
            if (err) {
                resolve({
                    status: typ.status.Failed,
                    message: 'Error', error: err.message 
                });
            }
            resolve({
                status: typ.status.Success,
                message: result.affectedRows > 0 ? 'Product deleted successfully' : 'No product found',
                affectedRows: result.affectedRows
            });
        });
    });
};

