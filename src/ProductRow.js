import React from 'react';
import './ProductRow.css';


class ProductRow extends React.Component {
  constructor(props) {
    super(props);
    this.destroy = this.destroy.bind(this);
  }

  destroy() {
    this.props.onDestroy(this.props.product.id);
  }

  render() {
    var name = this.props.product.stocked ? this.props.product.name :
    <span style={{color: 'red'}}>
      {this.props.product.name}
    </span>
    return (
      <tr>
        <td>
          {/* <span className={this.props.products.stocked ? '' : 'ProductRow-out-of-stock'}>
            {this.props.products.name}
          </span> */}
          {name}
        </td>
        <td>
          {this.props.products.price}
        </td>
        <td>
          <button onClick={this.destroy}>x</button>
        </td>
      </tr>
    );
  }
}

export default ProductRow;