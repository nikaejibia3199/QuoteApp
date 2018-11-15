import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { NavigationActions, StackActions  } from 'react-navigation';
import { Logo } from '../components/Logo';
import { SideMenuIcon } from '../components/SideMenuIcon';
import { CategoryLabel } from '../components/CategoryLabel';
import FastImage from 'react-native-fast-image';

const WIDTH = Dimensions.get('window').width;
const ITEM_HEIGHT = 240;

const QUOTES_URL = 'https://www.jarofquotes.com/api.php?type=category&term=';
const QUOTE_IMAGE_URL = 'https://www.jarofquotes.com/quotes/';

//const category = "Jes";

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
            isFetching: true,
            isError: false,
            isRefreshing: false,
            page: 1,
            quotes : []
        }
    }

    pushToScreen = (route, cat, term) => () => {	
		const pushAction = StackActions.push({
		  routeName: route,
		  params: {
			typeOfQuote: cat,
			nameID: term,
		  },
		});

		this.props.navigation.dispatch(pushAction);
    };
	
    componentDidMount = () => {
        _this = this;
        this._fetchQuotes(this.state.category, this.state.page);
    }
	
	Capitalize(str){
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

    _fetchQuotes = (category, page) => {
        const url = `${QUOTES_URL}${category}&amp;page=${page}`;
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

    _onPressLogo = () => {
        this.props.navigation.replace('Home');
    }

    _onPressMenu = () => {
        this.props.navigation.toggleDrawer();
    }

    render() {
        return (
            <ScrollView style={styles.container}>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'ability') }>Ability</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'abuse') }>Abuse</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'age') }>Age</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'anger') }>Anger</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'animals') }>Animals</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'anniversary') }>Anniversary</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'art') }>Art</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'attitude') }>Attitude</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'baseball') }>Baseball</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'beauty') }>Beauty</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'beginnings') }>Beginnings</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'bible') }>Bible</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'birth') }>Birth</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'birthday') }>Birthday</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'books') }>Books</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'boredom') }>Boredom</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'bravery') }>Bravery</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'breakup') }>Breakup</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'brevity') }>Brevity</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'broken') }>Broken</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'caution') }>Caution</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'ceremony') }>Ceremony</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'challenge') }>Challenge</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'change') }>Change</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'character') }>Character</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'charity') }>Charity</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'children') }>Children</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'christmas') }>Christmas</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'college') }>College</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'commitment') }>Commitment</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'compassion') }>Compassion</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'compromise') }>Compromise</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'confidence') }>Confidence</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'conflict') }>Conflict</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'confusion') }>Confusion</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'courage') }>Courage</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'courtesy') }>Courtesy</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'creation') }>Creation</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'criticism') }>Criticism</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'cute') }>Cute</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'death') }>Death</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'despair') }>Despair</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'determination') }>Determination</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'disease') }>Disease</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'dreams') }>Dreams</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'easter') }>Easter</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'education') }>Education</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'engagement') }>Engagement</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'envy') }>Envy</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'facts') }>Facts</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'failure') }>Failure</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'faith') }>Faith</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'family') }>Family</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'fear') }>Fear</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'food') }>Food</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'football') }>Football</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'forgiveness') }>Forgiveness</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'freedom') }>Freedom</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'friends') }>Friends</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'fun') }>Fun</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'generosity') }>Generosity</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'genius') }>Genius</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'goals') }>Goals</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'god') }>God</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'golf') }>Golf</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'gossip') }>Gossip</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'government') }>Government</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'graduation') }>Graduation</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'gratitude') }>Gratitude</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'greatness') }>Greatness</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'grief') }>Grief</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'growth') }>Growth</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'habits') }>Habits</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'halloween') }>Halloween</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'happiness') }>Happiness</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'hate') }>Hate</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'health') }>Health</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'heart') }>Heart</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'heaven') }>Heaven</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'history') }>History</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'home') }>Home</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'honesty') }>Honesty</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'honor') }>Honor</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'hope') }>Hope</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'hypocrisy') }>Hypocrisy</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'ideas') }>Ideas</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'idleness') }>Idleness</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'ignorance') }>Ignorance</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'imagination') }>Imagination</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'joy') }>Joy</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'judgement') }>Judgement</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'justice') }>Justice</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'kindness') }>Kindness</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'knowledge') }>Knowledge</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'laughter') }>Laughter</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'laziness') }>Laziness</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'leadership') }>Leadership</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'lies') }>Lies</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'life') }>Life</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'limitations') }>Limitations</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'literature') }>Literature</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'loneliness') }>Loneliness</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'losing') }>Losing</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'loyalty') }>Loyalty</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'lying') }>Lying</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'memory') }>Memory</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'mind') }>Mind</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'money') }>Money</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'mother') }>Mother</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'movies') }>Movies</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'music') }>Music</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'office') }>Office</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'opportunity') }>Opportunity</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'pain') }>Pain</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'patience') }>Patience</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'peace') }>Peace</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'people') }>People</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'perseverance') }>Perseverance</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'persistence') }>Persistence</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'pleasure') }>Pleasure</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'politics') }>Politics</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'poverty') }>Poverty</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'power') }>Power</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'praise') }>Praise</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'prayers') }>Prayers</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'pride') }>Pride</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'problems') }>Problems</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'procrastination') }>Procrastination</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'proverbs') }>Proverbs</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'reason') }>Reason</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'rebellion') }>Rebellion</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'regret') }>Regret</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'relationships') }>Relationships</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'religion') }>Religion</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'repentance') }>Repentance</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'respect') }>Respect</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'responsibility') }>Responsibility</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'revenge') }>Revenge</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'romance') }>Romance</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'rumor') }>Rumor</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'sacrifice') }>Sacrifice</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'sad') }>Sad</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'sanity') }>Sanity</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'science') }>Science</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'service') }>Service</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'sex') }>Sex</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'sin') }>Sin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'sleep') }>Sleep</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'songs') }>Songs</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'sorrow') }>Sorrow</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'sports') }>Sports</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'strength') }>Strength</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'stress') }>Stress</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'stupidity') }>Stupidity</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'success') }>Success</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'suffering') }>Suffering</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'summer') }>Summer</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'taxes') }>Taxes</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'thankfulness') }>Thankfulness</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'thanksgiving') }>Thanksgiving</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'time') }>Time</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'toys') }>Toys</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'trouble') }>Trouble</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'truth') }>Truth</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'understanding') }>Understanding</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'valentines') }>Valentines</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'valor') }>Valor</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'vice') }>Vice</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'virtue') }>Virtue</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'war') }>War</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'weakness') }>Weakness</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'weddings') }>Weddings</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'winter') }>Winter</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'wisdom') }>Wisdom</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'wonder') }>Wonder</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'words') }>Words</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'work') }>Work</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'worrying') }>Worrying</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'category', 'worship') }>Worship</Text>
            </ScrollView>
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
    },
	text:{
		backgroundColor: 'rgb(255, 0, 0)'
	},
})