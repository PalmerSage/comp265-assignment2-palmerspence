import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

// Simple "lesson complete" screen
// Gives user feedback and a way back to Home

export default function DoneScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top image for consistency */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/story-placeholder.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Card with completion text and navigation */}
      <View style={styles.card}>
        <Text style={styles.title}>Lesson Complete!</Text>
        <Text style={styles.subtitle}>Great job finishing the lesson.</Text>

        {/* Button returns user to Home screen */}
        <TouchableOpacity style={styles.button} onPress={() => router.push('/')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styling is the same structure as the story and question pages
// Everything stays visually consistent from start to finish

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff8be',
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  card: {
    backgroundColor: '#C4A484',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5C4033',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#F9F6EE',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
