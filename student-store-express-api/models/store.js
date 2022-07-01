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

    let prev = [`Showing receipt for ${user.name} available at ${user.email}:`];
    let tail = [
      `Before taxes, the subtotal was ${total}`,
      `After taxes and fees were applied, the total comes out to ${newTotal}`,
    ];
    let temp = [];
    let row = []
    shoppingCart.forEach((item) => {
        row.push(item.id)
      temp.push(
        `${item.quantity} total ${item.name} purchased at a cost of ${item.price} for a total cost of ${parseFloat(parseFloat(item.price) * parseInt(item.quantity))}.`
      );
    });

    var newTotal = total * 1.0875;

    const purchaseOrder = {
      name: user.name,
      email: user.email,
      order: shoppingCart,
      total: newTotal,
      //   total: this.total(shoppingCart),
      createdAt: new Date().toLocaleString(),

      receipt: {
        userInfo: {
          name: user.name,
          email: user.email,
        },
        lines: prev.concat(temp, tail),

        productRows:row
      },

      //   receipt: `Showing receipt for ${user.name} available at ${user.email}:` + temp +

      //   `Before taxes, the subtotal was ${total}
      //   After taxes and fees were applied, the total comes out to ${newTotal}`
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
