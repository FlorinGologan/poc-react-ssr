import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions';
import { Helmet } from 'react-helmet';

class ProductsListPage extends Component {
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

  head () {
    return (
      <Helmet>
        <title>SSR POC - Products Page</title>
        <meta property="og:title" content="Products Page"/>
        <meta property="og:description" content={ `${ this.props.products.length } Products Loaded` }/>
      </Helmet>
    );
  }

  render () {
    return (
      <div>
        { this.head() }
        <h1>Products</h1>
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

function loadData (store) {
  return store.dispatch(fetchProducts());
}

export default {
  loadData,
  component: connect(mapStateToProps, {fetchProducts})(ProductsListPage)
};