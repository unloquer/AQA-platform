import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleNav from '../common/SimpleNav';
import routeConfig from '../../common/routeConfig';

import { Layout, Button, Row, Col, Menu, Icon } from 'antd/lib';
const { Header, Sider, Content, Footer } = Layout;

/*
   This is the root component of your app. Here you define the overall layout
   and the container of the react router. The default one is a two columns layout.
   You should adjust it according to the requirement of your app.
 */
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: 'No content.',
  };

  render() {
    return (
        <div>
        {this.props.children}
        </div>
    );
  }
}
