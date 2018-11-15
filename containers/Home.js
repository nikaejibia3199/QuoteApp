import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { Logo } from '../components/Logo';
import { SideMenuIcon } from '../components/SideMenuIcon';
import { CategoryLabel } from '../components/CategoryLabel';
import FastImage from 'react-native-fast-image';

const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 240;

const QUOTES_URL = 'https://www.jarofquotes.com/api.php?';
const QUOTE_IMAGE_URL = 'https://www.jarofquotes.com/quotes/';

export default class HomeScreen extends Component {
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
            category: 'love',
            isFetching: true,
            isError: false,
            isRefreshing: false,
            page: 1,
            quotes : [],
        }
    }

    componentDidMount = () => {
        _this = this;
        this._fetchQuotes('love', this.state.page);
    }

    _fetchQuotes = (category, page) => {
        const url = `${QUOTES_URL}type=trending&amp;page=${page}`;
        this.setState({
            isFetching: true, 
            isError: false,
            isRefreshing: false
        })

        setTimeout(() => {
            fetch(url)
            .then((response) => response.json())
            .then((responseJSON) => {
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
                    isRefreshing: false,
                    quotes : []
                })
            })
        }, 0);
    }



    _handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1,
            isFetching: true,
            isError: false,
            isRefreshing: false,
        })

        this._fetchQuotes(this.state.category, this.state.page);

    }

    _renderItem = (item) => {
        const url = `${QUOTE_IMAGE_URL}${item.id}.jpg`;
        return (
            <TouchableOpacity 
                style={styles.itemContainer}
                //onPress={() => this.props.navigation.push('Detail', {nameID: item.id})}
				>
                <FastImage
                    style={styles.quoteItem}
                    source={{
                        uri: url,
                        priority: FastImage.priority.high
                    }}
                    resizeMode={FastImage.resizeMode.stretch}/>
            </TouchableOpacity>
        )
    }

    _onPressLogo = () => {
        this.listRef.scrollToOffset({x: 0, y: 0, animated: true});
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
                    renderItem={({item}) => this._renderItem(item)}
                    keyExtractor={item => Math.random()}
                    refreshing={this.state.isRefreshing}
                    onEndReached={this._handleLoadMore}
                    onEndReachedThreshold={0.3}
                    extraData = {this.state}
                    ref={(ref) => { this.listRef = ref; }}
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
        flex: 1,
    },
    quoteItem: {
        height: ITEM_HEIGHT,
    }
})