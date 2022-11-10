import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { New } from "../screens/New";
import { Pools } from "../screens/Pools";
import { PlusCircle, SoccerBall } from 'phosphor-react-native';


const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'blue'
        }}>
            <Screen 
                name="new"
                component={New}
                options={{
                    tabBarIcon: () => <PlusCircle />
                }}
            />

            <Screen 
                name="pools"
                component={Pools}
                options={{
                    tabBarIcon: () => <SoccerBall />
                }}
            />
        </Navigator>
    )
}