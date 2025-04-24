import { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, Modal, TextInput, Switch } from 'react-native';

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

  const backgroundStyle = partyMode ? styles.partyContainer : styles.container;
  const textStyle = partyMode ? styles.partyText : styles.text;

  return (
    <ScrollView contentContainerStyle={backgroundStyle}>
      <Text style={styles.title}>Profile Screen</Text>

      <Button title="Edit Name" onPress={() => setModalVisible(true)} />

      {name !== '' && (
        <Text style={textStyle}>Welcome back, {name}!</Text>
      )}

      {/* 🎚️ Party Mode Switch */}
      <View style={styles.switchRow}>
        <Text style={textStyle}>Enable Party Mode</Text>
        <Switch value={partyMode} onValueChange={setPartyMode} />
      </View>

      {/* Modal with TextInput */}
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
            <Button title="Save" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  partyContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffeb3b',
  },
  text: {
    fontSize: 18,
    color: '#333',
    marginVertical: 10,
  },
  partyText: {
    fontSize: 18,
    color: '#e91e63',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    gap: 12,
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
