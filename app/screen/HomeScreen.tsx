import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import useDemo from '@graphql/demo/use-demo';

const HomeScreen: React.FC<any> = ({navigation}) => {
  const {data} = useDemo();
  return (
    <View style={styles.content}>
      <Text>{data?.hello}</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title={`Go to notifications`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
