import React,{Component} from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';

import { Text, } from './../../components/Text/Text.component';
import theme from './../../style/theme';

import styles from './AgentCard.style';


export default class AgentCard extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    
    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render(){
    	const {agent} = this.props;
        return(
            <ScrollView style={styles.container}>
            	<TouchableOpacity style={styles.sectionContainer}>
	            	<View style={styles.avatarContainer}>
	            		<Image 
	            			source={agent.image}
	            			style={styles.avatarImage}
	            		/>
	            	</View>
	            	<View style={styles.textSection}>
	            		<View style={{flexDirection:'row'}}>
		            		<Text style={styles.name}>	
		            			{agent.name}
		            		</Text>
		            		<Text style={{alignItems:'flex-end',  marginTop: 8, fontSize: 12, color: theme.LIGHT_COLOR,}}>{chat.time}</Text>
	            		</View>
	            		<View style={{marginBottom: 12,}}>
	            			<Text style={styles.location}>
	            				{(agent.location).substr(0, 38)}...
	            			</Text>
	            		</View>
					</View>
            	</TouchableOpacity>
            </ScrollView>
        );
    }
}