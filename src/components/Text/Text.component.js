import React, { Component } from 'react';

import {
  Text, 
} from 'react-native';

import styles from './Text.style';

export default class MyText extends Component {
  	render() {
	    return (
	      	<Text style={[styles.text, this.props.style]}>{this.props.children}</Text>
	    );
  	}
}