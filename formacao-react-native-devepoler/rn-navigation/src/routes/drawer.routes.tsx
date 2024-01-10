import { createDrawerNavigator } from '@react-navigation/drawer';

import { Home } from '../screens/Home';
import { Gallery } from '../screens/Gallery';

const { Screen, Navigator } = createDrawerNavigator();

export function DrawerRoutes() {
    return (
        <Navigator>
            <Screen name='home' component={Home} />
            <Screen name='gallery' component={Gallery} />
        </Navigator>
    );
}