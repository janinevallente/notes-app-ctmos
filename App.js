import React, { useEffect, useState } from 'react';
import { View, Animated, StyleSheet, Text, Image } from 'react-native';

const SplashScreen = () => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(-100));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.textContainer,
          { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
        ]}
      >
        <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
        resizeMode="contain"
      />
        <Text style={styles.title}>Welcome to My App</Text>
        <Text style={styles.subtitle}>Loading...</Text>
      </Animated.View>
    </View>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task, e.g., fetching data or loading resources
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set the duration as per your requirement
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <View>
      <Text>Your main app content here</Text>
      {/* Render other screens/components */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#010101',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
});

export default App;
