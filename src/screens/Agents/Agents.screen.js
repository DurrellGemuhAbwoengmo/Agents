import React, { Component } from 'react';
import {
    View, Text, ScrollView
} from 'react-native';
import SearchModal from './../../components/SearchModal/SearchModal.component'
import  {Navbar}  from './../../components/Navbar/Navbar.component';
import {agents} from './../../../res/data';
import  {AgentCard}  from './../../sections/AgentCard/AgentCard.section';



import styles from './Agents.style';

export default class Agents extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            agents: []
        }
    }

    componentDidMount() {
        this.setState({
             agents: agents,
            })
    }

    componentWillUnmount() {
        this.setState({
                 agents: agents,
             })
    }

    render() {
        return (
            <View style={ { flex: 1 } }>
                <Navbar title="Agent" />
                <ScrollView style={ styles.container }> 
                    { agents.map( ( agent, key ) => <AgentCard agent={ agent } key={ key } /> ) }
                </ScrollView>
            </View>
        );
    }
}

// import React,{Component} from 'react';
// import {
//   View,
//   ScrollView,
//   Image,
//   TouchableOpacity, 
// } from 'react-native';

// import  {Navbar}  from './../../components/Navbar/Navbar.component';
// import  {AgentCard}  from './../../sections/AgentCard/AgentCard.section';
// import {agents} from './../../../res/data';

// import styles from './Agents.style';


// export default class Agents extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             agents: []
//         }
//     }

//     componentDidMount() {
//         this.setState({
//             agents: agents,
//         })
//     }

//     render(){
//         const {agents} = this.state;
//         return(
//             <View style={{flex:1}}>  
//                 <Navbar title="Agent"/>
//                 <ScrollView style={styles.container}>
//                     {agents.map((agent, key) => <AgentCard agent={agent} key={key} />)}
//                 </ScrollView>
//             </View>
//         );
//     }
// }