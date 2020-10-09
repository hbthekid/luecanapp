import React from 'react';
import { TopNavigation, useTheme, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

export const HeaderComp = () => {
  const theme = useTheme();

  return (
      <TopNavigation
        style={[styles.header, { backgroundColor: theme['color-primary-default'] }]}
        title={<Text style={styles.text} category='h6'>Biblioteca Luecan</Text>}
        subtitle='Registro Libros'
      />
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop:30,
    paddingLeft:20,
    paddingRight:20
  },
  text:{
    color:'white',
  }
});