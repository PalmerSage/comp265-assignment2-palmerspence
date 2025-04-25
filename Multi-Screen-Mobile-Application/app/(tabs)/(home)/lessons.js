import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

// Lessons screen with a background image and three lesson cards.
// First card is clickable, rest are placeholders for future content.

export default function LessonsScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../../assets/lessonpage.jpg')} // same backdrop style as home
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Lesson Select</Text>

        {/* Only active lesson for now */}
        <TouchableOpacity style={styles.card} onPress={() => router.push('/story')}>
          <Text style={styles.cardTitle}>The Beaver and His Son</Text>
        </TouchableOpacity>

        {/* Placeholder cards — disabled for now */}
        <View style={styles.cardDisabled}>
          <Text style={styles.cardTitle}>Coming Soon</Text>
        </View>

        <View style={styles.cardDisabled}>
          <Text style={styles.cardTitle}>Coming Soon</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

// Styling keeps everything tight, consistent, and centered on readability.
// Lesson cards are bold, clean, and spaced enough for touch.

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  card: {
    backgroundColor: '#5C4033',
    paddingVertical: 24,
    paddingHorizontal: 36,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  cardDisabled: {
    backgroundColor: '#cccccc',
    paddingVertical: 24,
    paddingHorizontal: 36,
    borderRadius: 16,
    marginBottom: 20,
    alignItems: 'center',
    opacity: 0.6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9F6EE',
  },
});
