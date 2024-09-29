const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.get("/search-products/:name", async (req, res) => {
    let name = req.params.name;
    try {
        // שימוש ב-regex לחיפוש שמות שמתחילים במחרוזת
        const products = await Product.find({ name: { $regex: `${name}`, $options: 'i' } });
        
        if(products.length === 0 || !products)
            return res.status(202).send({ message: "No products found with that name" });

        res.status(200).send({ message: "Products found:", products: products });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: "Something went wrong" });
    }
});

module.exports = router;