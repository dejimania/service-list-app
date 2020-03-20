import React from 'react';

class Filters extends React.Component {
  constructor(props){
    super(props);

  }

  handleChange(evt) {
    const value =evt.target[evt.target.value === 'checked' ? 'checked' : 'value'];

    const name = evt.target.name;

    this.props.onFilter({
      [name]: value
    });
  }

  render(){
    return(
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          name="filterText"
          onChange={this.handleChange}
          />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            name="inStockOnly"
            onChange={this.handleChange}
            />
          &nbsp; Only show stocked products
        </p>
      </form>
    );
  }
}

export default Filters;