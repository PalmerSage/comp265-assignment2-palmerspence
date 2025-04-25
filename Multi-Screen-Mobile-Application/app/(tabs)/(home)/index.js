import { View, StyleSheet, Button, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../../assets/homepage.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/lessons')}>
          <Text style={styles.buttonText}>Start Learning</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: '20%', 
  },
  button: {
    backgroundColor: '#5C4033', 
    paddingVertical: 18,
    paddingHorizontal: 36,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 40,
    color: '#F9F6EE',
    fontWeight: 'bold',
  },
});
