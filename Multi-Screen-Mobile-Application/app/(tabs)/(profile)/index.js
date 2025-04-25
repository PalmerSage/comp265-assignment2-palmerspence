import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Switch,
  ImageBackground,
  Pressable,
} from 'react-native';

// Profile page for editing name and toggling Night Mode
// Modal pops up first time user visits

export default function ProfileScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [name, setName] = useState('');
  const [partyMode, setPartyMode] = useState(false);

  useEffect(() => {
    if (!hasShown) {
      setModalVisible(true);
      setHasShown(true);
    }
  }, []);

  return (
    <ImageBackground
      source={require('../../../assets/lessonpage.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* loverlay when Party Mode (Night Mode) is enabled */}
      {partyMode && <View style={styles.partyOverlay} />}

      <View style={styles.content}>
        <Text style={styles.title}>Profile Screen</Text>

        {/* Show name and edit button if user entered one */}
        {name !== '' && (
          <>
            <Text style={styles.welcome}>Welcome back, {name}!</Text>
            <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Edit Name</Text>
            </Pressable>
          </>
        )}

        {/* If no name entered yet */}
        {name === '' && (
          <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>Edit Name</Text>
          </Pressable>
        )}

        {/* Switch for enabling/disabling Night Mode */}
        <View style={styles.partyContainer}>
          <Text style={styles.partyLabel}>Enable Night Mode</Text>
          <Switch value={partyMode} onValueChange={setPartyMode} />
        </View>

        {/* Name input modal */}
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Enter your name</Text>
              <TextInput
                placeholder="Type here"
                value={name}
                onChangeText={setName}
                style={styles.input}
              />
              <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Save</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

// Same visual structure as other screens.
// Background image, centered content, clean buttons and modal styling.

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  partyOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#fff176aa',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 30,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5C4033',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: '#F9F6EE',
    fontSize: 16,
    fontWeight: 'bold',
  },
  partyContainer: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
  },
  partyLabel: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
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
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    width: '100%',
    marginBottom: 15,
  },
});
