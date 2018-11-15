import React, { Component } from 'react';
import { NavigationActions, StackActions  } from 'react-navigation';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

class SideMenu extends Component {
    
    navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
    
        this.props.navigation.dispatch(navigateAction);
    };
	
    pushToScreen = (route, cat) => () => {	
		const pushAction = StackActions.push({
		  routeName: route,
		  params: {
			nameID: cat,
		  },
		});

		this.props.navigation.dispatch(pushAction);
    };
	
	
	

    render() {
        return (
            <View 
                style={styles.container}>
                <View style={styles.titleBar}>
                    <Text style={styles.title}>Menu</Text>
                </View>
                <ScrollView
                    style={styles.scrollView}>
                    <View style={styles.menu}>
                        <Text style={styles.menuText} onPress={this.pushToScreen('Home') }>Trending Quotes</Text>
                    </View>
                    <View style={styles.menu}>
                        <Text style={styles.menuText} onPress={this.pushToScreen('Authors', 'author') }>Popular Authors</Text>
                    </View>
                    <View style={styles.menu}>
                        <Text style={styles.menuText} onPress={this.pushToScreen('Inner', 'categories') }>Popular Categories</Text>
                    </View>
					
					
					
					
					
					
					
					
                </ScrollView>
            </View>
        )
    }

}

export default SideMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleBar: {
        height: 80,
        backgroundColor: '#0054FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#FFF'
    },
    scrollView: {
        marginTop: 40,
        marginLeft: 20,
        width: '100%',
        height: '100%'
    },
    menu: {
        width: '100%',
        height: 60,
    },
    menuText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'black'
    }
})