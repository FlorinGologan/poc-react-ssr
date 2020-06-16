import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';

class ProductsList extends Component {
  componentDidMount () {
    this.props.fetchProducts();
  }

  renderProducts () {
    return this.props.products.map(product => {
      return (
        <li key={ product.id }>
          { product.name }
        </li>
      );
    });
  }

  render () {
    return (
      <div>
        <h1>Products:</h1>
        <ul>
          { this.renderProducts() }
        </ul>

      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps, {fetchProducts})(ProductsList);