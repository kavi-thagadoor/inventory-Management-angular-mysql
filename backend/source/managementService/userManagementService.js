import * as userManagement from '../management/userManagement.js'


export let addUser = async (req) => {
    let res = await userManagement.addUser(req);
    return res;  
}

export let getUserById = async (req) => {
    let res = await userManagement.getUserById(req);
    return res;  
}

export let loginUser = async (req) => {
    let res = await userManagement.loginUser(req);
    return res;  
}