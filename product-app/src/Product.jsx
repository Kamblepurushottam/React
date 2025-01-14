import React, { useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([
    {
      name: "",
      quantity: "0",
      price: "0",
      amount: "0",
    },
  ]);

  const addProduct = () => {
    setProducts([
      ...products,
      { name: "",
        quantity: "",
        price: "", 
        amount: "" },
    ]);
  };

  const handleChange = (ind, input, value) => {
    const updatedProducts = [...products];
    updatedProducts[ind][input] = value;

   

    if ((input && "quantity") || (input && "price")) {
      const quantity = parseInt(updatedProducts[ind].quantity || 0, 10);
      const price = parseFloat(updatedProducts[ind].price || 0);
      updatedProducts[ind].amount = quantity * price || "";
    }
    setProducts(updatedProducts);
  };

  const totalAmount = products.reduce((total, product) => {
    const amount = parseFloat(product.amount || 0);
    return total + amount;
  }, 0);
  return (
    <div className="main">
      <div className=" div-head d-flex justity-content-between gap-6 mb-6">
        <h3>Product Details</h3>
        <button className="btn btn-outline-primary" onClick={addProduct}>
          Add Product
        </button>
      </div>
      <table className="table table-striped  table-bordered ">
        <thead>
          <tr className=" text-center">
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, ind) => (
            <tr key={ind}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product Name"
                  value={product.name}
                  onChange={(e) => handleChange(ind, "name", e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Quantity"
                  value={product.quantity}
                  onChange={(e) =>
                    handleChange(ind, "quantity", e.target.value)
                  }
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Price"
                  value={product.price}
                  onChange={(e) => handleChange(ind, "price", e.target.value)}
                  required
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Product Amount"
                  value={product.amount}
                  readOnly
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h4 className="total">Total Amount : {totalAmount}</h4>
      </div>
    </div>
  );
};

export default Product;
