import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Chat, Rating} from '../../screens';

const Tab = createBottomTabNavigator();
const screens = [
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
        <Tab.Screen key={index} name={item?.name} component={item?.component} />
      ))}
    </Tab.Navigator>
  );
}
