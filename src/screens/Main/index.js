import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Container from '../../components/Container';
import BottomTabNavigation from '../../components/BottomTabNavigation';

const Home = () => (
  <Container>
    <Text>I am home</Text>
  </Container>
);
const Search = () => (
  <Container>
    <Text>I am Search</Text>
  </Container>
);
const Library = () => (
  <Container>
    <Text>I am Library</Text>
  </Container>
);

const screens = [
  {
    name: 'Home',
    component: Home,
    options: {
      tabBarIcon: ({color}) => <Icon name="home" color={color} size={20} />,
    },
  },
  {
    name: 'Search',
    component: Search,
    options: {
      tabBarIcon: ({color}) => <Icon name="search" color={color} size={20} />,
    },
  },
  {
    name: 'Library',
    component: Library,
    options: {
      tabBarIcon: ({color}) => <Icon name="book" color={color} size={20} />,
    },
  },
];

export default function Main() {
  return <BottomTabNavigation tabs={screens} />;
}
