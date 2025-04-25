import { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { lessons } from './lessonData';
import * as Speech from 'expo-speech';

// Displays one part of the story at a time
// Automatically speaks the English sentence out loud on load

export default function StoryScreen() {
  const router = useRouter();
  const { index = 0 } = useLocalSearchParams();
  const i = parseInt(index);

  const lesson = lessons[0];
  const storyPart = lesson.story[i];

  useEffect(() => {
    Speech.speak(storyPart.english); // only speaks English cause holy moly did it butcher cree
  }, [i]);

  return (
    <View style={styles.container}>
      {/*  Placeholder image for this part of the story */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/story-placeholder.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/*  Story card showing both Cree and English */}
      <View style={styles.card}>
        <Text style={styles.cree}>{storyPart.cree}</Text>
        <Text style={styles.english}>{storyPart.english}</Text>

        {/*  Continue to related question */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push(`/question?index=${i}`)}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styling keeps layout clean, colors consistent with the rest of the app,

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
  cree: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  english: {
    fontSize: 18,
    marginBottom: 30,
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
    fontSize: 22,
    fontWeight: 'bold',
  },
});
