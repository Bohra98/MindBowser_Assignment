import React, { PureComponent } from 'react';
import { View, ActivityIndicator, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { SearchBar, Icon } from 'react-native-elements';
import { getGiphyList } from '../redux/actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FastImage from 'react-native-fast-image';
import { addFav, fetchFav, removeFav } from '../shared/firebasecrud';

const width = Dimensions.get('screen').width

class ListItem extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            page:1,
            resList:[],
            searchQuery: ''
        }
    }

    static getDerivedStateFromProps(props,state){
        return {
            resList:[...state.resList,...props.listData],
           
        }
    }

    componentDidMount(){
        this.props.getGiphyList(this.state.page)
    }

    checkandAddFav = (item) => {
        let favList = fetchFav()
        if(favList.length === 5){
            alert('Maximum 5 Favourite can be allowed')
        }
        else{
            addFav(item)
        }
        
    }

    renderLoading(){
        if(this.props.listLoading){
            return(
                <ActivityIndicator size="large" color="black" style={{alignSelf:'center'}}/>
            )
        }
    }

    renderFooter(){
        return(
            <ActivityIndicator size="large" color="black" style={{alignSelf:'center'}}/>
        )
    }

    renderGifList = ({item,index}) => {
        let favList = fetchFav()
        let isFav = favList.some((fav) => fav.favItem.id === item.id)
        return(
            <View style={{padding:10,marginBottom:20}}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailView',{gif:item})}>
                <FastImage  
                    source={{uri:item.images.original.url}}
                    style={{width:width-20,height:250}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf:'flex-end',marginTop:10,marginRight:10}} onPress={() => this.checkandAddFav(item)}>
                    <Icon name={isFav ? "heart" : "heart-o"} type="font-awesome" color={isFav ? "red" : "black"} size={20} />
                </TouchableOpacity>   
            </View>
        )
    }

    expandList=()=> {
        let offset = this.state.page+1
        this.props.getGiphyList(offset)
        this.setState({page:offset})
    }

    render(){
        

        return(
            <View style={{flex:1}}>
               <SearchBar 
                    placeholder="Search Here..." 
                    onChangeText={(text) => this.setState({searchQuery:text})} 
                    value={this.state.text}
                    searchIcon={true}
                    lightTheme={true}
                    round={true}/>
                    {this.renderLoading()}
                <FlatList 
                    data={this.state.resList}
                    renderItem={this.renderGifList}
                    onEndReached={this.expandList}
                    onEndReachedThreshold={0.5}
                    keyExtractor={item => item.id}
                    ListFooterComponent={this.renderFooter}/>         
            </View>
        )
    }
}

function initMapStateToProps(state){
    return{
        listData: state.list.listData,
        listLoading: state.list.listLoading,
        listerror: state.list.listerror
    }
}

function initMapDispatchToProps(dispatch){
    return bindActionCreators({
        getGiphyList
    },dispatch)
}

export default connect(initMapStateToProps, initMapDispatchToProps)(ListItem);