import * as userManagementService  from '../managementService/userManagementService.js'

export let version = async (req,res) =>{
    try {
        let response = '1.0.0';
        if (process.env.NODE_ENV === 'development') {
            response = '1.0.0-dev';
        }
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export let addUser = async (req,res) =>{
    try {
        let response = await userManagementService.addUser(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export let getUserById = async (req,res) =>{
    try {
        let response = await userManagementService.getUserById(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export let loginUser = async (req,res) =>{
    try {
        let response = await userManagementService.loginUser(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}
