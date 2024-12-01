import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeSreen";
import ProfileScreen from "../screens/ProfileScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import PlaceScreen from "../screens/PlaceScreen";
import MovieScreen from "../screens/MovieScreen";


const ProfileStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreens() {
    return (<HomeStack.Navigator>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "" }}></HomeStack.Screen>
        <HomeStack.Screen name="PlaceScreen" component={PlaceScreen} options={{ title: "Places" }}></HomeStack.Screen>
        <HomeStack.Screen name="Movie" component={MovieScreen} />
    </HomeStack.Navigator>)
}

function ProfileStackScreens() {
    return (<ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ title: "" }}></ProfileStack.Screen>
    </ProfileStack.Navigator>)
}

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeStackScreens} options={{ tabBarLabel: "Home", tabBarLabelStyle: { color: "black" }, headerShown: false, tabBarIcon: ({ focused }) => focused ? (<Entypo name="home" size={24} color="black" />) : (<AntDesign name="home" size={24} color="black" />) }}></Tab.Screen>
                <Tab.Screen name="ProfileScreen" component={ProfileStackScreens} options={{ tabBarLabel: "Profile", tabBarLabelStyle: { color: "black" }, headerShown: false, tabBarIcon: ({ focused }) => focused ? (<FontAwesome6 name="user-large" size={24} color="black" />) : (<SimpleLineIcons name="user" size={24} color="black" />) }}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )

}

export default Navigation;