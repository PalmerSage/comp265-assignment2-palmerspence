import { View, Text, Image, Pressable, StyleSheet, Modal } from 'react-native';
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
      {/* Top Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/story-placeholder.jpg')} // replace with final image
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Question Card */}
      <View style={styles.card}>
        <Text style={styles.question}>{question.question}</Text>

        <Pressable style={styles.button} onPress={handleCorrect}>
          <Text style={styles.buttonText}>{question.correct}</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={handleWrong}>
          <Text style={styles.buttonText}>{question.incorrect[0]}</Text>
        </Pressable>
      </View>

      {/* ❗ Incorrect Answer Modal */}
      <Modal visible={showModal} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Oops! Try again.</Text>
            <Pressable style={styles.modalClose} onPress={() => setShowModal(false)}>
              <Text style={styles.modalCloseText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

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
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5C4033',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F9F6EE',
    fontSize: 18,
    fontWeight: 'bold',
  },
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
  modalClose: {
    backgroundColor: '#5C4033',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  modalCloseText: {
    color: '#F9F6EE',
    fontWeight: 'bold',
  },
});
