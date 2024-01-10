import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Gallery } from '../screens/Gallery';

const { Screen, Navigator } = createStackNavigator();

export function StackRoutes() {
    return (
        <Navigator>
            <Screen name='home' options={{ title: 'Menu' }} component={Home} />
            <Screen name='gallery' options={{ title: 'Galeria de Fotos' }} component={Gallery} />
        </Navigator>
    )
}