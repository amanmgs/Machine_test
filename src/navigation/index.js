import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import Product_Listing from '../Container/Product_Listing';
import Product_Detail from '../Container/Product_Detail';

const Stack = createStackNavigator();

const RootNavigator = (props) => {
    const { navigation } = props;
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='HomeNavigator' screenOptions={{
                    headerTitleStyle: {
                        fontSize: 17,
                        fontWeight: 'bold',
                        paddingLeft: 50,
                        letterSpacing: 1,
                        color: 'black'
                    },
                }}>
                <React.Fragment>
                <Stack.Screen options={{ headerShown: false, headerTitleAlign: 'center', headerTitleStyle: { color: 'grey', }, title: 'Home', headerBackImage: () => <Icon name="arrow-back" size={30} color={theme.colors.secondary} />, }} name="HomeNavigator" component={HomeNavigator}/>
                <Stack.Screen options={{ headerShown: false, headerTitleAlign: 'center', headerTitleStyle: { color: 'grey', }, title: 'Home', headerBackImage: () => <Icon name="arrow-back" size={30} color={theme.colors.secondary} />, }} name="Product_Listing" component={Product_Listing}/>
                <Stack.Screen options={{ headerShown: false, headerTitleAlign: 'center', headerTitleStyle: { color: 'grey', }, title: 'Home', headerBackImage: () => <Icon name="arrow-back" size={30} color={theme.colors.secondary} />, }} name="Product_Detail" component={Product_Detail}/>
                </React.Fragment>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigator;