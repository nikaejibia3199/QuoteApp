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
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'a. a. milne') }>A. A. Milne</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'a. p. j. abdul kalam') }>A. P. J. Abdul Kalam</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'abraham lincoln favorite') }>Abraham Lincoln Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'adam smith') }>Adam Smith</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'adlai e. stevenson') }>Adlai E. Stevenson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'aeschylus') }>Aeschylus</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'aesop') }>Aesop</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'aishwarya rai bachchan') }>Aishwarya Rai Bachchan</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'alan watts') }>Alan Watts</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'albert camus') }>Albert Camus</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'albert einstein favorite') }>Albert Einstein Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'albert schweitzer') }>Albert Schweitzer</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'aldous huxley') }>Aldous Huxley</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'alex honnold') }>Alex Honnold</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'alexander hamilton') }>Alexander Hamilton</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'alexander pope') }>Alexander Pope</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'alexander the great') }>Alexander the Great</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'alexis de tocqueville') }>Alexis de Tocqueville</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'alfred lord tennyson') }>Alfred Lord Tennyson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'alice walker') }>Alice Walker</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ambrose bierce') }>Ambrose Bierce</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'amelia earhart') }>Amelia Earhart</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'anais nin') }>Anais Nin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'andrew carnegie') }>Andrew Carnegie</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'andrew jackson') }>Andrew Jackson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'andy warhol') }>Andy Warhol</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'anne frank') }>Anne Frank</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ansel adams') }>Ansel Adams</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'anthony bourdain') }>Anthony Bourdain</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'antoine de saint-exupery') }>Antoine de Saint-Exupery</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'aristotle favorite') }>Aristotle Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'arnold h. glasow') }>Arnold H. Glasow</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'arnold schwarzenegger') }>Arnold Schwarzenegger</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'arthur ashe') }>Arthur Ashe</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'arthur conan doyle') }>Arthur Conan Doyle</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'arthur schopenhauer') }>Arthur Schopenhauer</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'audre lorde') }>Audre Lorde</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'audrey hepburn') }>Audrey Hepburn</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ayn rand') }>Ayn Rand</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'b. f. skinner') }>B. F. Skinner</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'barack obama favorite') }>Barack Obama Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bell hooks') }>bell hooks</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'benjamin disraeli') }>Benjamin Disraeli</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'benjamin franklin favorite') }>Benjamin Franklin Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bertrand russell') }>Bertrand Russell</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bette davis') }>Bette Davis</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bill gates') }>Bill Gates</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bill murray') }>Bill Murray</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'billie eilish') }>Billie Eilish</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'billy graham') }>Billy Graham</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'blaise pascal') }>Blaise Pascal</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bo jackson') }>Bo Jackson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bob dylan') }>Bob Dylan</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bob marley') }>Bob Marley</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bobby knight') }>Bobby Knight</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'booker t. washington') }>Booker T. Washington</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'brad henry') }>Brad Henry</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bradley whitford') }>Bradley Whitford</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'brene brown') }>Brene Brown</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'brian tracy') }>Brian Tracy</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bruce lee') }>Bruce Lee</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'bryant h. mcgill') }>Bryant H. McGill</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'buddha favorite') }>Buddha Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'burt lancaster') }>Burt Lancaster</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'c. s. lewis favorite') }>C. S. Lewis Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'calvin coolidge') }>Calvin Coolidge</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'cardi b') }>Cardi B</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'carl jung') }>Carl Jung</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'carl sagan') }>Carl Sagan</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'carol burnett favorite') }>Carol Burnett Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'cesar chavez') }>Cesar Chavez</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'charles darwin') }>Charles Darwin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'charles de gaulle') }>Charles de Gaulle</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'charles de montesquieu') }>Charles de Montesquieu</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'charles dickens') }>Charles Dickens</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'charles r. swindoll favorite') }>Charles R. Swindoll Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'charles spurgeon') }>Charles Spurgeon</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'charlie chaplin') }>Charlie Chaplin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'christopher hitchens') }>Christopher Hitchens</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'christopher mccandless') }>Christopher McCandless</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'chuck palahniuk') }>Chuck Palahniuk</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'clint eastwood') }>Clint Eastwood</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'coco chanel') }>Coco Chanel</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'colin kaepernick') }>Colin Kaepernick</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'colin powell favorite') }>Colin Powell Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'confucius favorite') }>Confucius Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'conor mcgregor') }>Conor McGregor</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'coretta scott king') }>Coretta Scott King</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'd. h. lawrence') }>D. H. Lawrence</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'dalai lama favorite') }>Dalai Lama Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'dale carnegie') }>Dale Carnegie</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'dan quayle') }>Dan Quayle</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'daniel boone') }>Daniel Boone</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'dante alighieri') }>Dante Alighieri</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'david bowie') }>David Bowie</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'deepak chopra') }>Deepak Chopra</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'demetri martin') }>Demetri Martin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'denis waitley') }>Denis Waitley</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'dennis miller') }>Dennis Miller</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'desmond tutu') }>Desmond Tutu</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'diogenes') }>Diogenes</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'dolly parton') }>Dolly Parton</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'don miguel ruiz') }>Don Miguel Ruiz</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'donald trump favorite') }>Donald Trump Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'douglas adams') }>Douglas Adams</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'douglas macarthur') }>Douglas MacArthur</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'dr. seuss') }>Dr. Seuss</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'drake') }>Drake</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'dwayne johnson') }>Dwayne Johnson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'dwight d. eisenhower') }>Dwight D. Eisenhower</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'e. e. cummings') }>e. e. cummings</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'earl nightingale') }>Earl Nightingale</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'eckhart tolle') }>Eckhart Tolle</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'edgar allan poe favorite') }>Edgar Allan Poe Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'edmund burke') }>Edmund Burke</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'edward everett hale') }>Edward Everett Hale</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'elbert hubbard') }>Elbert Hubbard</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'eleanor roosevelt favorite') }>Eleanor Roosevelt Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'elie wiesel') }>Elie Wiesel</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'elizabeth i') }>Elizabeth I</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ellen degeneres') }>Ellen DeGeneres</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'elon musk') }>Elon Musk</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'elvis presley') }>Elvis Presley</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'emily dickinson') }>Emily Dickinson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'eminem') }>Eminem</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'epictetus') }>Epictetus</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'erma bombeck') }>Erma Bombeck</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ernest hemingway') }>Ernest Hemingway</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'euripides') }>Euripides</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'f. scott fitzgerald') }>F. Scott Fitzgerald</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'florence nightingale') }>Florence Nightingale</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'francis bacon') }>Francis Bacon</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'francis of assisi') }>Francis of Assisi</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'frank lloyd wright') }>Frank Lloyd Wright</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'frank sinatra') }>Frank Sinatra</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'frank zappa') }>Frank Zappa</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'franklin d. roosevelt') }>Franklin D. Roosevelt</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'franz kafka') }>Franz Kafka</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'freddie mercury') }>Freddie Mercury</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'frederick douglass') }>Frederick Douglass</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'frida kahlo') }>Frida Kahlo</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'friedrich nietzsche favorite') }>Friedrich Nietzsche Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'fyodor dostoevsky') }>Fyodor Dostoevsky</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'galileo galilei') }>Galileo Galilei</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'george bernard shaw favorite') }>George Bernard Shaw Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'george burns') }>George Burns</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'george carlin') }>George Carlin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'george eliot') }>George Eliot</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'george orwell') }>George Orwell</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'george s. patton favorite') }>George S. Patton Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'george sand') }>George Sand</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'george santayana') }>George Santayana</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'george w. bush') }>George W. Bush</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'george washington') }>George Washington</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'george washington carver') }>George Washington Carver</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'gertrude stein') }>Gertrude Stein</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'gilbert k. chesterton') }>Gilbert K. Chesterton</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'gloria steinem') }>Gloria Steinem</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'golda meir') }>Golda Meir</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'gordon b. hinckley') }>Gordon B. Hinckley</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'gordon ramsay') }>Gordon Ramsay</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'groucho marx') }>Groucho Marx</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'h. g. wells') }>H. G. Wells</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'h. l. mencken') }>H. L. Mencken</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'h. p. lovecraft') }>H. P. Lovecraft</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'haile selassie') }>Haile Selassie</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'hans christian andersen') }>Hans Christian Andersen</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'harriet tubman') }>Harriet Tubman</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'harry s truman') }>Harry S Truman</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'helen keller favorite') }>Helen Keller Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'henny youngman') }>Henny Youngman</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'henry david thoreau favorite') }>Henry David Thoreau Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'henry ford') }>Henry Ford</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'henry james') }>Henry James</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'henry rollins') }>Henry Rollins</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'henry wadsworth longfellow') }>Henry Wadsworth Longfellow</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'henry ward beecher') }>Henry Ward Beecher</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'heraclitus') }>Heraclitus</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'herman melville') }>Herman Melville</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'hillary clinton') }>Hillary Clinton</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'hippocrates') }>Hippocrates</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'hubert h. humphrey') }>Hubert H. Humphrey</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'hugh hefner') }>Hugh Hefner</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'hunter s. thompson') }>Hunter S. Thompson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'immanuel kant') }>Immanuel Kant</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'isaac asimov') }>Isaac Asimov</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'isaac newton') }>Isaac Newton</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'j. k. rowling') }>J. K. Rowling</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'j. r. r. tolkien') }>J. R. R. Tolkien</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jack ma') }>Jack Ma</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jack welch') }>Jack Welch</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jackie robinson') }>Jackie Robinson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'james a. baldwin') }>James A. Baldwin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'james k. polk') }>James K. Polk</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'james madison') }>James Madison</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'james thurber') }>James Thurber</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jane austen') }>Jane Austen</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jane goodall') }>Jane Goodall</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jean-jacques rousseau') }>Jean-Jacques Rousseau</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jean-paul sartre') }>Jean-Paul Sartre</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jeff bezos') }>Jeff Bezos</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jenn proske') }>Jenn Proske</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jenny mccarthy') }>Jenny McCarthy</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jerry seinfeld') }>Jerry Seinfeld</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jesus christ') }>Jesus Christ</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jiddu krishnamurti') }>Jiddu Krishnamurti</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jim carrey') }>Jim Carrey</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jim morrison') }>Jim Morrison</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jim rohn favorite') }>Jim Rohn Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jimi hendrix') }>Jimi Hendrix</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jimmy carter') }>Jimmy Carter</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'jimmy dean') }>Jimmy Dean</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'joe biden') }>Joe Biden</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'joel osteen') }>Joel Osteen</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'johann wolfgang von goethe') }>Johann Wolfgang von Goethe</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john adams') }>John Adams</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john c. maxwell') }>John C. Maxwell</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john d. rockefeller') }>John D. Rockefeller</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john dewey') }>John Dewey</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john f. kennedy favorite') }>John F. Kennedy Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john keats') }>John Keats</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john lennon') }>John Lennon</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john lewis') }>John Lewis</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john locke') }>John Locke</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john muir') }>John Muir</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john mulaney') }>John Mulaney</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john steinbeck') }>John Steinbeck</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john w. gardner') }>John W. Gardner</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'john wooden') }>John Wooden</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'johnny cash') }>Johnny Cash</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'joseph campbell') }>Joseph Campbell</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'joseph stalin') }>Joseph Stalin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'joyce meyer') }>Joyce Meyer</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'julius caesar') }>Julius Caesar</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'kanye west') }>Kanye West</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'karl marx') }>Karl Marx</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'keanu reeves') }>Keanu Reeves</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'kenneth branagh') }>Kenneth Branagh</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'kevin gates') }>Kevin Gates</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'kevin hart') }>Kevin Hart</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'khalil gibran') }>Khalil Gibran</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'kim kardashian') }>Kim Kardashian</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'kinky friedman') }>Kinky Friedman</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'kobe bryant') }>Kobe Bryant</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'kurt cobain') }>Kurt Cobain</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'kurt vonnegut') }>Kurt Vonnegut</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'lady gaga') }>Lady Gaga</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'langston hughes') }>Langston Hughes</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'lao tzu favorite') }>Lao Tzu Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'lebron james') }>LeBron James</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'leo buscaglia') }>Leo Buscaglia</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'leo tolstoy') }>Leo Tolstoy</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'leonardo da vinci') }>Leonardo da Vinci</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'les brown') }>Les Brown</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'lewis carroll') }>Lewis Carroll</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'lil uzi vert') }>Lil Uzi Vert</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'lil wayne') }>Lil Wayne</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'lord byron') }>Lord Byron</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'lou holtz') }>Lou Holtz</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'lucius annaeus seneca') }>Lucius Annaeus Seneca</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'lyle lovett') }>Lyle Lovett</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'lyndon b. johnson') }>Lyndon B. Johnson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'mae west') }>Mae West</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'mahatma gandhi favorite') }>Mahatma Gandhi Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'maimonides') }>Maimonides</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'malala yousafzai') }>Malala Yousafzai</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'malcolm x favorite') }>Malcolm X Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'marcel proust') }>Marcel Proust</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'marcus aurelius') }>Marcus Aurelius</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'marcus garvey') }>Marcus Garvey</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'marcus tullius cicero') }>Marcus Tullius Cicero</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'margaret atwood') }>Margaret Atwood</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'margaret mead') }>Margaret Mead</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'margaret thatcher') }>Margaret Thatcher</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'maria mitchell') }>Maria Mitchell</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'maria montessori') }>Maria Montessori</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'marie antoinette') }>Marie Antoinette</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'marie curie') }>Marie Curie</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'marilyn monroe') }>Marilyn Monroe</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'mark twain favorite') }>Mark Twain Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'martin luther') }>Martin Luther</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'matt cameron') }>Matt Cameron</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'maya angelou favorite') }>Maya Angelou Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'melody beattie') }>Melody Beattie</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'michael jordan') }>Michael Jordan</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'michelangelo') }>Michelangelo</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'michelle obama') }>Michelle Obama</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'mignon mclaughlin') }>Mignon McLaughlin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'mike tyson') }>Mike Tyson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'milton friedman') }>Milton Friedman</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'mitch hedberg') }>Mitch Hedberg</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'morgan freeman') }>Morgan Freeman</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'mother teresa') }>Mother Teresa</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'muhammad ali') }>Muhammad Ali</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'napoleon bonaparte') }>Napoleon Bonaparte</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'napoleon hill') }>Napoleon Hill</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'nathaniel hawthorne') }>Nathaniel Hawthorne</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'neil armstrong') }>Neil Armstrong</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'neil degrasse tyson') }>Neil deGrasse Tyson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'nelson mandela favorite') }>Nelson Mandela Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'newt gingrich') }>Newt Gingrich</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'niccolo machiavelli') }>Niccolo Machiavelli</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'nick saban') }>Nick Saban</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'nikola tesla') }>Nikola Tesla</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'noam chomsky') }>Noam Chomsky</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'norman cousins') }>Norman Cousins</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'norman schwarzkopf') }>Norman Schwarzkopf</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'norman vincent peale') }>Norman Vincent Peale</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'og mandino favorite') }>Og Mandino Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'omar khayyam') }>Omar Khayyam</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'oprah winfrey') }>Oprah Winfrey</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'orson welles') }>Orson Welles</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'oscar wilde favorite') }>Oscar Wilde Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'pablo picasso') }>Pablo Picasso</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'paulo coelho') }>Paulo Coelho</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'pele') }>Pele</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'peter drucker') }>Peter Drucker</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'phil mcgraw') }>Phil McGraw</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'phyllis diller') }>Phyllis Diller</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'pierre teilhard de chardin') }>Pierre Teilhard de Chardin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'plato favorite') }>Plato Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'pope francis') }>Pope Francis</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'post malone') }>Post Malone</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'prince') }>Prince</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'queen elizabeth ii') }>Queen Elizabeth II</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'quincy jones') }>Quincy Jones</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'r. buckminster fuller') }>R. Buckminster Fuller</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'rabindranath tagore') }>Rabindranath Tagore</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ralph marston') }>Ralph Marston</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ralph waldo emerson favorite') }>Ralph Waldo Emerson Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ray bradbury') }>Ray Bradbury</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'reba mcentire') }>Reba McEntire</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'reinhold niebuhr') }>Reinhold Niebuhr</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'rene descartes') }>Rene Descartes</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ric flair') }>Ric Flair</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'richard bach') }>Richard Bach</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'richard branson') }>Richard Branson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'richard m. nixon') }>Richard M. Nixon</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ricky martin') }>Ricky Martin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'robert a. heinlein') }>Robert A. Heinlein</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'robert baden-powell') }>Robert Baden-Powell</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'robert browning') }>Robert Browning</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'robert e. lee') }>Robert E. Lee</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'robert frost') }>Robert Frost</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'robert h. schuller') }>Robert H. Schuller</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'robert kennedy') }>Robert Kennedy</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'robert louis stevenson') }>Robert Louis Stevenson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'robin s. sharma') }>Robin S. Sharma</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'robin williams') }>Robin Williams</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'rodney dangerfield') }>Rodney Dangerfield</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ron white') }>Ron White</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ronald reagan favorite') }>Ronald Reagan Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'rosa parks') }>Rosa Parks</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'rumi') }>Rumi</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'ruth bader ginsburg') }>Ruth Bader Ginsburg</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'saint augustine') }>Saint Augustine</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'saint teresa of avila') }>Saint Teresa of Avila</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'salvador dali') }>Salvador Dali</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'sam walton') }>Sam Walton</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'samuel adams') }>Samuel Adams</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'samuel johnson') }>Samuel Johnson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'satchel paige') }>Satchel Paige</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'shah rukh khan') }>Shah Rukh Khan</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'shiv khera') }>Shiv Khera</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'sigmund freud') }>Sigmund Freud</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'simon sinek') }>Simon Sinek</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'simone de beauvoir') }>Simone de Beauvoir</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'socrates') }>Socrates</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'sonia sotomayor') }>Sonia Sotomayor</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'soren kierkegaard') }>Soren Kierkegaard</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'st. jerome favorite') }>St. Jerome Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'stephen covey') }>Stephen Covey</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'stephen hawking') }>Stephen Hawking</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'stephen king') }>Stephen King</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'steve irwin') }>Steve Irwin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'steve jobs favorite') }>Steve Jobs Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'steve prefontaine') }>Steve Prefontaine</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'steven wright') }>Steven Wright</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'sun tzu') }>Sun Tzu</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'susan b. anthony') }>Susan B. Anthony</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'swami sivananda') }>Swami Sivananda</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'swami vivekananda') }>Swami Vivekananda</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'sylvia plath') }>Sylvia Plath</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 't. s. eliot') }>T. S. Eliot</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'taylor swift') }>Taylor Swift</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'tecumseh') }>Tecumseh</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'tena desae') }>Tena Desae</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'theodore roosevelt favorite') }>Theodore Roosevelt Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'thich nhat hanh') }>Thich Nhat Hanh</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'thomas a. edison') }>Thomas A. Edison</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'thomas aquinas') }>Thomas Aquinas</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'thomas hobbes') }>Thomas Hobbes</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'thomas jefferson favorite') }>Thomas Jefferson Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'thomas merton favorite') }>Thomas Merton Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'thomas paine') }>Thomas Paine</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'thomas sowell') }>Thomas Sowell</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'tim cook') }>Tim Cook</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'tom brady') }>Tom Brady</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'tommy chong') }>Tommy Chong</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'tony robbins') }>Tony Robbins</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'travis scott') }>Travis Scott</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'tupac shakur') }>Tupac Shakur</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'victor hugo') }>Victor Hugo</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'viktor e. frankl') }>Viktor E. Frankl</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'vince lombardi') }>Vince Lombardi</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'vincent van gogh') }>Vincent Van Gogh</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'virat kohli') }>Virat Kohli</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'virginia woolf') }>Virginia Woolf</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'vladimir lenin') }>Vladimir Lenin</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'voltaire favorite') }>Voltaire Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'w. c. fields') }>W. C. Fields</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'w. clement stone') }>W. Clement Stone</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'w. e. b. du bois') }>W. E. B. Du Bois</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'w. edwards deming') }>W. Edwards Deming</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'walt disney favorite') }>Walt Disney Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'walt whitman') }>Walt Whitman</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'walter scott') }>Walter Scott</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'warren buffett') }>Warren Buffett</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'wayne dyer') }>Wayne Dyer</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'wayne gretzky') }>Wayne Gretzky</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'wayne huizenga') }>Wayne Huizenga</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'will ferrell') }>Will Ferrell</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'will rogers favorite') }>Will Rogers Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'will smith') }>Will Smith</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'william arthur ward') }>William Arthur Ward</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'william barclay') }>William Barclay</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'william blake') }>William Blake</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'william butler yeats') }>William Butler Yeats</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'william james') }>William James</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'william shakespeare favorite') }>William Shakespeare Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'william tecumseh sherman') }>William Tecumseh Sherman</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'william wordsworth') }>William Wordsworth</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'willie mccovey') }>Willie McCovey</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'willie nelson') }>Willie Nelson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'winston churchill favorite') }>Winston Churchill Favorite</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'woodrow wilson') }>Woodrow Wilson</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'woody allen') }>Woody Allen</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'yogi berra') }>Yogi Berra</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'yoko ono') }>Yoko Ono</Text>
				<Text style={styles.text} onPress={this.pushToScreen('Detail', 'authors', 'zora neale hurston') }>Zora Neale Hurston</Text>
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