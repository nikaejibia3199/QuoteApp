import React, { Component } from 'react';
import { Share, View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { Logo } from '../components/Logo';
import { SideMenuIcon } from '../components/SideMenuIcon';
import { CategoryLabel } from '../components/CategoryLabel';
import FastImage from 'react-native-fast-image';

const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 240;

const QUOTES_URL = 'https://www.jarofquotes.com/api.php?';
const QUOTE_IMAGE_URL = 'https://www.jarofquotes.com/quotes/';

//?type=category&term=love&page=1

export default class NotificationScreen extends Component {
    static navigationOptions = {
        headerTitle: <Logo onPress={() => _this._onPressLogo()}/>,
        headerLeft: (
            <SideMenuIcon
                onPress={() => _this._onPressMenu()}/>
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            category: this.props.navigation.state.params.nameID,
			typeOfQuote: this.props.navigation.state.params.typeOfQuote,
            isFetching: true,
            isError: false,
            isRefreshing: false,
            page: 1,
            quotes : []
        }
    }

	
	
    componentDidMount = () => {
        _this = this;
        this._fetchQuotes(this.state.category, this.state.typeOfQuote, this.state.page);
    }
	
	Capitalize(str){
		return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
        console.log("First capital letter: "+word[0]);
        console.log("remain letters: "+ word.substr(1));
        return word[0].toUpperCase() + word.substr(1);
    })
    .join(' ');
	}

    shareImage = (quote, id) => {
		const shareOptions = {
		  message: quote, // Note that according to the documentation at least one of "message" or "url" fields is required
		  url: 'https://www.jarofquotes.com/quotes/${id}.jpg',
		  subject: 'Jar of Quotes Share'
		};
		
		Share.share(shareOptions)
    }

    isJsonString = (str) => {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
	
    _fetchQuotes = (category, typeOfQuote, page) => {
        const url = `${QUOTES_URL}type=${typeOfQuote}&term=${category}&page=${page}`;
        this.setState({
            isFetching: true, 
            isError: false,
            isRefreshing: false
        })

        setTimeout(() => {
            fetch(url)
            .then((response) => {
                return response.text()
                    .then((text) => this.isJsonString(text) ? JSON.parse(text) : []);
            })
            .then((responseJSON) => {
                if (responseJSON.length === 0) {
                    // No Load More
                }
                this.setState({
                    isFetching: false,
                    isError: false,
                    isRefreshing: false,
                    quotes: [...this.state.quotes, ...responseJSON]
                })
            })
            .catch((error) => {
                console.error(error);
                this.setState({
                    isFetching: false,
                    isError: true,
                    isRefreshing: false
                })
            })
        }, 0);
    }

    _onPressLogo = () => {
        this.props.navigation.replace('Home');
    }



    _handleLoadMore = () => {
        if(this.state.isFetching) {
            return;
        }

        this.setState({
            page: this.state.page + 1,
            isFetching: true,
            isError: false,
            isRefreshing: false,
        })

        this._fetchQuotes(this.state.category, this.state.typeOfQuote, this.state.page);

    }

    _renderItem = (item) => {
        const url = `${QUOTE_IMAGE_URL}${item.id}.jpg`;
        return (
            <TouchableOpacity 
                style={styles.itemContainer}
				//onPress={this.shareImage(item.quote, item.id)}
               // onPress={() => this.props.navigation.push('Detail', {nameID: item.id})}
				>
                <FastImage
                    style={styles.quoteItem}
                    source={{
                        uri: url,
                        priority: FastImage.priority.high
                    }}
                    resizeMode={FastImage.resizeMode.stretch}/>
					<Text style={{ position: 'absolute', top: 30, left: 10 }}>Share</Text>

            </TouchableOpacity>
        )
    }

    _onPressMenu = () => {
        this.props.navigation.toggleDrawer();
    }

    _showIndicator = () => {
        if (this.state.isFetching) {
            return (
                <View style={{flex: 1, padding:20}}>
                    <ActivityIndicator/>
                </View>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={this.state.quotes}
                    ListHeaderComponent={<CategoryLabel title={`${this.Capitalize(this.state.category)} Quotes`}/>}
                    renderItem={({item}) => this._renderItem(item)}
                    keyExtractor={item => Math.random()}
                    refreshing={this.state.isRefreshing}
                    onEndReached={this._handleLoadMore}
                    onEndReachedThreshold={0.3}
					extraData = {this.state}
                />
				{this.state.isFetching && (
          <ActivityIndicator
            style={{ height: 80 }}
            color="#C00"
            size="large"
          />
        )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)'
    },
    list: {
        flex: 1,
    },
    itemContainer: {
        flex: 1
    },
    quoteItem: {
        height: ITEM_HEIGHT
    }
})