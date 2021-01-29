import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import { addFav, fetchFav, removeFav } from '../shared/firebasecrud';

const width = Dimensions.get('screen').width

class DetailView extends Component {
    constructor(props){
        super(props)
        this.state = {
            gifObject:{},
            favList:[],
        }
        
    }

    static getDerivedStateFromProps(props,state){
        return {
            gifObject: props.route.params.gif
        }
    }


    componentDidMount(){
        let favdata = fetchFav()
        this.setState({favList:favdata})
    }
    
    checkandAddFav = () => {
        if(this.state.favList.length === 5){
            alert('Maximum 5 Favourite can be allowed')
        }
        else{
            addFav(this.state.gifObject)
            this.forceUpdate();
        }
    }
    

    render(){
        let isFav = this.state.favList.some((fav) => fav.favItem.id === this.state.gifObject.id)
        return(
            <View style={{flex:1,padding:10}}>
                   <FastImage
                        source={{uri:this.state.gifObject.images.original.url}}
                        style={{width:width-20,height:350}}>
                        <TouchableOpacity style={{alignSelf:'flex-end',marginTop:10,marginRight:10}} onPress={() => this.checkandAddFav()}>
                            <Icon name={isFav?"heart":"heart-o"} type="font-awesome" color={isFav?"red":"white"} />
                        </TouchableOpacity>    
                    </FastImage>             
                <View style={{width:width-20, marginTop:30}}>
                    <Text style={{fontWeight:'bold',fontSize:25,color:'black'}}>{this.state.gifObject.title}</Text>
                </View>
                <View style={{width:width-20, marginTop:30}}>
                    <Text style={{fontSize:15,color:'black' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged. It was popularised in
                        the 1960s with the release of Letraset sheets containing Lorem
                        Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </View>    
            </View>
        )
    }
}

export default DetailView;