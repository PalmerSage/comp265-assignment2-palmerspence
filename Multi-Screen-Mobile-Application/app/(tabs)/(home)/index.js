import { View, StyleSheet, Button, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

// Home screen with background image and single call-to-action button

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../../assets/homepage.jpg')} // full-page backdrop
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Primary CTA button */}
        <TouchableOpacity style={styles.button} onPress={() => router.push('/lessons')}>
          <Text style={styles.buttonText}>Start Learning</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

// Minimal styling just want that big button to keep the acimowin vibe

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
