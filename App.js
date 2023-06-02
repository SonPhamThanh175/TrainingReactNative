import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewNavigation from './navigation/Navigation';
import AddStudent from './screen/AddStudent';
import Student from './screen/Student';

export default function App() {
  return (
    // <Student></Student>
    // <AddStudent></AddStudent>
    <ViewNavigation></ViewNavigation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
