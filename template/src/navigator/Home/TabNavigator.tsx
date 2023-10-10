import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Home, Chat, Rating} from '../../screens';

const Tab = createBottomTabNavigator();

interface screenOptions {
  name: string;
  component: React.FC;
  options?: BottomTabNavigationOptions;
}

const screens: Array<screenOptions> = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Home',
    component: Chat,
  },
  {
    name: 'Home',
    component: Rating,
  },
];

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      {screens.map((item, index) => (
        <Tab.Screen
          key={index}
          options={item?.options ?? {}}
          name={item?.name}
          component={item?.component}
        />
      ))}
    </Tab.Navigator>
  );
}
