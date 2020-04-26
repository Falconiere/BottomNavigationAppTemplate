import PropTypes from 'prop-types';
import React from 'react';
import {View, SafeAreaView} from 'react-native';

const commonStyles = {
  backgroundColor: 'black',
  flex: 1,
};
export default function Container(props) {
  const {children} = props;

  return (
    <SafeAreaView style={commonStyles}>
      <View style={{...commonStyles, backgroundColor: 'white'}}>
        {children}
      </View>
    </SafeAreaView>
  );
}

Container.defaultProps = {
  children: null,
};
Container.propTypes = {
  children: PropTypes.node,
};
