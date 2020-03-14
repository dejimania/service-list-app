import React from 'react';
import ProductRow from './ProductRow.js';
import ProductTableHeader from './ProductTableHeader';


class ProductTable extends React.Component {
  render() {
    let productsAsArray = Object.keys(this.props.products).map((pid) =>
      this.props.products[pid]);

    let rows = [];

    productsAsArray.forEach((product) => {
      rows.push(
        <ProductRow products={product} key={product.id}></ProductRow>
      );
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <ProductTableHeader column="name"></ProductTableHeader>
            </tr>
            <tr>
              <ProductTableHeader column="price"></ProductTableHeader>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}


export default ProductTable;