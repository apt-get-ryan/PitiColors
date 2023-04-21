import { StyleSheet, StatusBar, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { ColorProvider } from './src/contexts/ColorProvider';
import Header from './src/components/Header';
import ColorDisplayer from './src/components/ColorDisplayer';
export default function App() {
  return (
    <ColorProvider>
    <StatusBar style="light-content" backgroundColor="#0A101A"/>
    <SafeAreaView contentInsetAdjustmentBehavior="automatic" style={styles.container}>
      <Header/>
      <ScrollView > 
      <ColorDisplayer></ColorDisplayer>
      </ScrollView>
    </SafeAreaView>
    </ColorProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1d1d30',
    flex: 1
  },
});
