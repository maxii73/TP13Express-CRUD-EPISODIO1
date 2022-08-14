const fs = require('fs');
const path = require('path');

/* Lee el json, lo parsea y me lo devuelve parseado */
const loadProducts = () => {
    const productsFilePath = path.join(__dirname, 'productsDataBase.json');
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    return products
}

/* Recibe un array y lo guarda */
const storeProducts = (products) => {
    fs.writeFileSync(path.join(__dirname, 'productsDataBase.json'), JSON.stringify(products, null, 3), 'utf-8')
}

module.exports = {
    loadProducts,
    storeProducts
}