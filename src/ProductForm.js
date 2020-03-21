import React from 'react';


class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSave(evt) {
    this.props.onSave(this.state.product);
    // reset form data
    this.setState({
      product: Object.assign({}, 'RESET_VALUES')
    });
    evt.preventDefault();
  }

  handleChange(evt) {
    const target = evt.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState((prevState) => {
      prevState.product[name] = value;
      return { product: prevState.product };
    });
  }
  render() {
    return (
      <form>
        <h3>Enter a new Product</h3>
        <p>
          <label>
            Name
            <br />
            <input type="text" name="name"
            onChange={this.handleChange} value={this.state.product.name}
            />
          </label>
        </p>
        <p>
          <label>
            Category
            <br />
            <input type="text" name="category"
            onChange={this.handleChange} value={this.state.product.category}
            />
          </label>
        </p>
        <p>
          <label>
            Price
            <br />
            <input type="text" name="price"
            onChange={this.handleChange} value={this.state.product.price}
            />
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="stocked"
            onChange={this.handleChange} value={this.state.product.stocked}
            />
            &nbsp;In Stock?
          </label>
        </p>
        <input type="submit" value="Save" onClick={this.handleSave}/>
      </form>
    );
  }
}


export default ProductForm;