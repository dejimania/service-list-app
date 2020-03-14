import React from 'react';

class Filters extends React.Component {
  render(){
    return(
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />&nbsp; Only show stocked products
        </p>
      </form>
    );
  }
}

export default Filters;