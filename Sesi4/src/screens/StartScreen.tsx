import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/coffe1.jpg')}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Coffee so good, your taste buds will love it.
          </Text>
          <Text style={styles.subtitle}>
            The best grain, the finest roast, the powerful flavor.
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Link to={"/Main"} style={styles.buttonText}>
            Get Started
          </Link>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    top: 600,
    left: 5,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 640
  },
  button: {
    backgroundColor: '#D97E54',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    alignSelf: 'center',
    marginBottom: 50,
    height: 55,
    width: 300
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default StartScreen;
