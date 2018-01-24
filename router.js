import { DrawerNavigator } from 'react-navigation';
//components
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import StackoverflowPage from './components/StackoverflowPage';
import LogoutPage from './components/LogoutPage';

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