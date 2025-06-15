import * as userManagementService  from '../managementService/userManagementService.js'

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
