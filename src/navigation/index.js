import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Container/Home';

const Stack = createStackNavigator();

const RootNavigator = (props) => {
    const { navigation } = props;
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home' screenOptions={{
                    headerTitleStyle: {
                        fontSize: 17,
                        fontWeight: 'bold',
                        paddingLeft: 50,
                        letterSpacing: 1,
                        color: 'black'
                    },
                }}>
                <React.Fragment>
                <Stack.Screen options={{ headerShown: false, headerTitleAlign: 'center', headerTitleStyle: { color: 'grey', }, title: 'Home', headerBackImage: () => <Icon name="arrow-back" size={30} color={theme.colors.secondary} />, }} name="Home" component={Home}/>
                </React.Fragment>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;