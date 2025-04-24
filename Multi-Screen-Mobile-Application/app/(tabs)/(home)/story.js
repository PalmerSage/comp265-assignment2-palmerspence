import { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { lessons } from './lessonData';
import * as Speech from 'expo-speech';

export default function StoryScreen() {
  const router = useRouter();
  const { index = 0 } = useLocalSearchParams();
  const i = parseInt(index);

  const lesson = lessons[0];
  const storyPart = lesson.story[i];

  useEffect(() => {
    Speech.speak(storyPart.english);
  }, [i]); // speak on index change

  return (
    <View style={styles.container}>
      <Text style={styles.cree}>{storyPart.cree}</Text>
      <Text style={styles.english}>{storyPart.english}</Text>

      <Button
        title="Continue"
        onPress={() => router.push(`/question?index=${i}`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  cree: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  english: { fontSize: 18, marginBottom: 30 },
});
