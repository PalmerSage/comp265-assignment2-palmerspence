import { View, Text, Button, StyleSheet, Modal } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { lessons } from './lessonData';

export default function QuestionScreen() {
  const router = useRouter();
  const { index = 0 } = useLocalSearchParams();
  const i = parseInt(index);

  const lesson = lessons[0];
  const question = lesson.questions[i];

  const [showModal, setShowModal] = useState(false);

  const handleCorrect = () => {
    if (i + 1 >= lesson.story.length) {
      router.push('/done');
    } else {
      router.push(`/story?index=${i + 1}`);
    }
  };

  const handleWrong = () => {
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>

      <Button title={question.correct} onPress={handleCorrect} />
      <Button title={question.incorrect[0]} onPress={handleWrong} />

      {/* ❗ Incorrect Answer Modal */}
      <Modal visible={showModal} transparent={true} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Oops! Try again.</Text>
            <Button title="Close" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  question: { fontSize: 18, marginBottom: 20 },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
  },
});
