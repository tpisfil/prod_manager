const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products/new", ProductController.createNewProduct);
    app.get("/api/products/:id",ProductController.findOneProduct);
    app.put("/api/products/update/:id",ProductController.updateExistingProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
}