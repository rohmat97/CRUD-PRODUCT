import Products from "../models/productModel.js";

export const getAllProduct =async(req, res) => {
    try {
        const prods = await Products.findAll();
        res.json(prods)
    } catch (error) {
        res.json({message: error.message})
    }
    
};

export const getProductById =async(req, res) => {
    try {
        const prods = await Products.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(prods[0])
    } catch (error) {
        res.json({message: error.message})
    }
    
};

export const createProduct =async(req, res) => {
    try {
        await Products.create(req.body)
        res.json({
            "message": "Product Created"
        })
    } catch (error) {
        res.json({message: error.message})
    }
    
};

export const updateProduct =async(req, res) => {
    try {
        await Products.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        res.json({
            "message": "Product Updated"
        })
    } catch (error) {
        res.json({message: error.message})
    }
    
};

export const deleteProduct =async(req, res) => {
    try {
        await Products.destroy({
            where:{
                id: req.params.id
            }
        })
        res.json({
            "message": "Product Deleted"
        })
    } catch (error) {
        res.json({message: error.message})
    }
    
};
