const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class Store {
  static listProducts() {
    // list all items in the product
    const products = storage.get("products").value();
    return products;
  }

  static fetchProductById(productId) {
    // fetch a single product
    const product = storage
      .get("products")
      .find({ id: Number(productId) })
      .value();
    return product;
  }

  static createPurchase(shoppingCart, user) {
    if (!shoppingCart) {
      throw new BadRequestError(`No product sent.`);
    }

    if (!user) {
      throw new BadRequestError(`No product sent.`);
    }
    console.log(shoppingCart, user);
    let seen = [];
    shoppingCart.forEach((item) => {
      if (!item.itemId || !item.quantity || seen.includes(item.id)) {
        throw new BadRequestError(`No product sent.`);
      }
      seen.concat(item.id);
    });

    var total = 0;

    shoppingCart.forEach((item) => {
      console.log(total);
      total += parseFloat(parseFloat(item.price) * parseInt(item.quantity));
      console.log(item.price);
      console.log(item.quantity);
    });

    var newTotal = total * 1.0875;
    const purchaseOrder = {
      name: user.name,
      email: user.email,
      order: shoppingCart,
      total: newTotal,
      //   total: this.total(shoppingCart),
      createdAt: new Date().toLocaleString(),
    };
    console.log(purchaseOrder);
    return purchaseOrder;
  }

  //   static total(shoppingCart) {
  //     var total = 0;
  //     shoppingCart.forEach((item) => {
  //       total += (parseInt(item.price) * parseInt(item.quantity));
  //     });

  //     return total * 1.0875;
  //   }
}

module.exports = Store;
