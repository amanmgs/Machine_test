import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Container/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();


const HomeNavigator = (props) => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'red',
                headerShown: false
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"home"} color={color} size={size} />)
                }}
            />
            <Tab.Screen
                name="Categories"
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"th-large"} color={color} size={size} />)
                }}
            />
            <Tab.Screen
                name="Studio"
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"tv"} color={color} size={size} />)
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"wpexplorer"} color={color} size={size} />)
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => (<MaterialIcons name={"account-circle"} color={color} size={size} />)
                }}
            />
        </Tab.Navigator>
    )
}


export default HomeNavigator;