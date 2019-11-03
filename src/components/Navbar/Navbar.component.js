'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './Navbar.styles'

export default class Navbar extends Component {
	constructor(props){
			super(props);
			this.state ={
				modalVisible : false
			}
		}

		toggleModal(visible){
			this.setState({modalVisible: visible})
		}
  render() {
    return (
      	<View style={styles.navBar}>
  			<Text style={styles.header}>{this.props.title}</Text>
  			<Modal 
				animation="slide" 
				transparent
				visible ={this.state.modalVisible}
				onRequestClose = {() =>this.setState({modalVisible: false})}
				>
				<View style={styles.modal}>
					<View style={{flexDirection: 'row'}}>
				 		<Icon name="arrow-back" 
				 			size={30} 
				 			style={styles.icon}
				 			color="#63004f"
				 			onPress ={() =>{this.toggleModal(!this.state.modalVisible)}}
				 			/>

				 		<TextInput 
				 			placeholder="Search..."
				 			underlineColorAndroid="transparent"
				 			style={styles.textInput} 
				 		/>

					</View>
				</View>
			</Modal>
		 	<View style={styles.rightNav}>
		 	  <TouchableOpacity onPress={()=>{this.toggleModal(true)}}>
		 		<Icon style={styles.navItem} name="search" size={25} color="white" />
		 	  </TouchableOpacity>
		 	  <TouchableOpacity>
		 		<Icon style={styles.navItem} name="more-vert" size={25} color="white" />
		 	  </TouchableOpacity>
		 	</View>
		</View>
    );
  }
}