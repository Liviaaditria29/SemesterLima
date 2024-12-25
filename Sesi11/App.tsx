import React, {useRef} from 'react';
import {View, Animated, Button, StyleSheet} from 'react-native';

const App: React.FC = () => {
  const moveAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(moveAnim, {
      toValue: 50,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.box, {transform: [{translateX: moveAnim}]}]}
      />
      <Button title="Move Box" onPress={startAnimation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    margin: 10,
    backgroundColor: 'blue',
  },
});

export default App;
