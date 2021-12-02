import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, TextInput, Dimensions, SafeAreaView, Platform} from 'react-native';

import * as Permissions from 'expo-permissions';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getUser } from '../../actions/user'
import * as ImagePicker from 'expo-image-picker'
import { uploadPhoto } from '../../actions/index'
import { updateNextPhoto } from '../../actions/post'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class PostScreen extends React.Component {

    state = {
        url: undefined
    }
    openLibrary = async () => {
        try{
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
            if(status === 'granted') {
                const image = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing:true
                })
                if(!image.cancelled){
                    const url = await this.props.uploadPhoto(image)
                    this.setState({url:url})
                    this.props.updateNextPhoto(url)
                }
            }
        }catch(error){
            alert(error);
        }
    }

    render(){
        return (
            <SafeAreaView style={ {flex:1,}}>
                 <View style={(Platform.OS == 'ios') ?{width:screenWidth, height:55, borderBottomColor:'grey', borderBottomWidth:1}: {width:screenWidth, height:55, borderBottomWidth:1, borderBottomColor:'grey', marginTop:30, justifyContent:'space-between', alignItems:'center', flexDirection:'row' }}>
                   
                    <Text style={{margin:10, fontWeight:'bold', fontSize:22}}>Create a new post</Text>
                    <TouchableOpacity style={{margin:10}}>
                        <Text style={{fontWeight:'bold', fontSize:22, color:'blue'}}>Upload</Text>
                    </TouchableOpacity>
                 </View>
                 
                 <View style={{width: screenWidth, height:360}}>
                    {
                    (this.state.url == undefined)?
                    <Image source={require('../../assets/images/download.png')} style={{width: screenWidth, height:360 }}/>
                    :
                    <Image source={{uri: this.state.url }} style={{width: screenWidth, height:360 }}/>
                    }
                </View>

                 <View style={{flexDirection:'row', width:screenWidth, justifyContent:'center', alignItems:'center'}}>
                     <TouchableOpacity style={{width:95, height:90, backgroundColor:'rgba(0,0,0,0.1)', justifyContent:'center',alignItems:'center',borderRadius: 5 }}
                     onPress={()=> this.openLibrary()}>
                        <View style={{width:40, height:40, borderRadius:20, backgroundColor:'rgba(0,0,0,0.1)', justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'white', fontSize:24}}>+</Text>
                        </View>
                     </TouchableOpacity>
                     {
                         this.props.post.photos.map(e=>
                         <View>
                             <Image source={{uri: e}} style={{width:95, height:90, backgroundColor:'rgba(0,0,0,0.1)'}}/>
                         </View>
                        )
                     }

                 </View>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getUser, uploadPhoto, updateNextPhoto }, dispatch)
}
const mapStateToProps = (state) => {
    return{
        user: state.user,
        post: state.post
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(PostScreen)