import * as ProductManagement from '../management/productManagement.js'


export let addProduct = async (req) => {
    let res = await ProductManagement.addProduct(req);
    return res;  
}

export let getProduct = async (req) => {
    let res = await ProductManagement.getProduct(req);
    return res;  
}

export let updateProduct = async (req) => {
    let res = await ProductManagement.updateProduct(req);
    return res;  
}

export let deleteProduct = async (req) => {
    let res = await ProductManagement.deleteProduct(req);
    return res;  
}