import { DrawerNavigator } from 'react-navigation';
//components
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import StackoverflowPage from '../pages/StackoverflowPage';
import LogoutPage from '../pages/LogoutPage';

const DrawerNavigation = DrawerNavigator(
    {
        Login: {
            screen: LoginPage
        },
        Home: {
            screen: HomePage
        },
        Stackoverflow: {
            screen: StackoverflowPage
        },
        Logout: {
            screen: LogoutPage
        }
    },
    {
        InitialRoutName: 'Login',
        drawerPosition: 'left'
    }
);

export default DrawerNavigation;