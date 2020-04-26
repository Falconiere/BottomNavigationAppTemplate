import PropTypes from 'prop-types';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const {Navigator, Screen} = createMaterialBottomTabNavigator();

export default function BottomTabNavigation(props) {
  const {tabs} = props;
  if (!tabs) {
    return null;
  }
  return (
    <Navigator barStyle={{backgroundColor: 'black'}}>
      {tabs.map((item, index) => (
        <Screen {...item} key={`${item.name}-${index}`} />
      ))}
    </Navigator>
  );
}

BottomTabNavigation.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      component: PropTypes.func.isRequired,
    }),
  ).isRequired,
};
