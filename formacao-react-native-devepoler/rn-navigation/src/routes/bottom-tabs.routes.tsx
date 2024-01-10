import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/Home';
import { Gallery } from '../screens/Gallery';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes() {
    return (
        <Navigator>
            <Screen
                name='home'
                options={{
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name='home' color='red' size={size} />)
                }}
                component={Home}
            />
            <Screen
                name='gallery'
                component={Gallery}
                options={{
                    tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name='view-gallery' color='blue' size={size} />)
                }}
            />
        </Navigator>
    );
}
