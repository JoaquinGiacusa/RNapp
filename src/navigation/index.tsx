import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '@src/assets/images/homeIcon';
import HomeScreen from '@src/screens/home';
import MessageIcon from '@src/assets/images/messageIcon';
import PlusIcon from '@src/assets/images/plusIcon';
import UserIcon from '@src/assets/images/userIcon';
import SettingsIcon from '@src/assets/images/settingsIcon';
import DraggableBottomModal from '@src/components/DraggableBottomModal';

const ChatScreen = ({navigation}: {navigation: any}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({tabBarVisible: false});
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Chat</Text>
      <DraggableBottomModal />
    </View>
  );
};

const NewPostScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{backgroundColor: '#ccc'}}>Settings!</Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            // top: 0,
            height: 56,
            margin: 9,
            borderRadius: 20,
            elevation: 1,
            zIndex: 1,
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <HomeIcon color={focused ? '#000000' : '#ccc'} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <MessageIcon color={focused ? '#000000' : '#ccc'} />
            ),
          }}
        />
        <Tab.Screen
          name="New Post"
          component={NewPostScreen}
          options={{
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <PlusIcon color={focused ? '#000000' : '#ccc'} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <UserIcon color={focused ? '#000000' : '#ccc'} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused}: {focused: boolean}) => (
              <SettingsIcon color={focused ? '#000000' : '#ccc'} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
