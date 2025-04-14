// app/(tabs)/story.js
import { View, Text, StyleSheet } from 'react-native';

export default function StoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Story Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24 },
});
