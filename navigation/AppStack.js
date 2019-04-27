import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/Home/Home';
import AddWordScreen from '../screens/AddWord/AddWord';
import AddWordDescriptionScreen from '../screens/AddWordDescription/AddWordDescription';
import PlaylistCreateScreen from '../screens/PlaylistCreate/PlaylistCreate';
import PlaylistViewScreen from '../screens/PlaylistView/PlaylistView';
import PlaylistListenScreen from '../screens/PlaylistListen/PlaylistListen';
import PlaylistResultScreen from '../screens/PlaylistResult/PlaylistResult';

const Home = {
  screen: HomeScreen,
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
};

const AddWord = {
  screen: AddWordScreen,
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
};

const AddWordDescription = {
  screen: AddWordDescriptionScreen,
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
};

const PlaylistCreate = {
  screen: PlaylistCreateScreen,
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
};

const PlaylistView = {
  screen: PlaylistViewScreen,
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
};

const PlaylistListen = {
  screen: PlaylistListenScreen,
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
};

const PlaylistResult = {
  screen: PlaylistResultScreen,
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
};

export default createStackNavigator({
  Home,
  AddWord,
  AddWordDescription,
  PlaylistCreate,
  PlaylistView,
  PlaylistListen,
  PlaylistResult
});
