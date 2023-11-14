var express = require("express");
var router = express.Router();
var products = require("../products.json");

/* GET home page. */
router.get("/listprod", function (req, res, next) {
  res.json(products);
});

router.get("getprod/:id", function (req, res, next) {
  const { id } = req.params;
  res.json(products[id]);
});

router.get("quantity/:id/:qt", function (req, res, next) {
  const { id } = req.params;
  const { qt } = req.params;
  const produit = products[id];
  const prixUnitaire = produit["price"];
  const prixTotal = prixUnitaire * qt;
  const output = {
    id: id,
    qt: qt,
    unit_price: prixUnitaire,
    total_price: prixTotal,
  };
  res.json(output);
});

router.get("/instock/:qt", function (req, res, next) {
  const { qt } = req.params;
  let output = [];
  for (let product in products) {
    if (products[product].stock >= qt) {
      output.push(products[product]);
    }
  }
  res.json(output);
});

module.exports = router;
