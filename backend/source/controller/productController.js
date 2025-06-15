import * as productManagementService  from '../managementService/productManagementService.js'

export let addProduct = async (req,res) =>{
    try {
        let response = await productManagementService.addProduct(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export let getProduct = async (req,res) =>{
    try {
        let response = await productManagementService.getProduct(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export let getProductById = async (req,res) =>{
    try {
        let response = await productManagementService.getProductById(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export let updateProduct = async (req,res) =>{
    try {
        let response = await productManagementService.updateProduct(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export let deleteProduct = async (req,res) =>{
    try {
        let response = await productManagementService.deleteProduct(req.body);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}


