'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Modal,
  TextInput, 
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SearchModal extends Component {

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
    	<View>
	      <Modal 
				animationIn="slideInRight"
				animationOut="slideOutRight" 
				transparent
				visible ={this.state.modalVisible}
				onRequestClose = {() =>this.setState({modalVisible: false})}
				>
				<View style={styles.modal}>
					<View style={{flexDirection: 'row'}}>
				 		<Icon name="chevron-left" 
				 			size={30} 
				 			style={styles.icon}
				 			color="lightblue"
				 			onPress ={() =>{this.toggleModal(!this.state.modalVisible)}}
				 			/>

				 		<TextInput 
				 			placeholder="Search..."
				 			underlineColorAndroid="transparent"
				 			style={styles.textInput}>
				 		</TextInput>

				 		<TouchableOpacity>
					 		<Icon name="search" 
							size={25} 
							color="grey" 
							style={{ marginVertical:13, marginRight:25}}
							/>
				 		</TouchableOpacity>

					</View>
				</View>
			</Modal>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
		container: {
			alignItems: 'center',
			backgroundColor: 'lightgrey',
			width: 50,
			height: 50,
			justifyContent: 'center',
			alignItems: 'center'
		},
	
		modal:{
			backgroundColor: 'white',
			alignItems: 'center',
			elevation:3,
		},
		text:{
			color: 'green',
			marginTop: 10,
		},
		textInput: {
			width:250,
			height: 40,
			marginTop: 8,
			marginRight: 50	
		},
		icon:{
			marginRight:20,
			marginTop: 8,
		}

});
