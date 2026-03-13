import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <ScrollView style={{ flex: 1, width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <StatusBar style="auto" />

          <Text>View dentro da view principal</Text>

          <View style={{ width: '97%', height: 50, backgroundColor: 'gray' }} />

          <Image
            source={{ uri: 'https://picsum.photos/id/237/200/300' }}
            style={{ width: '100%', height: 200 }}
            resizeMode="center"
          />

          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? 'red' : 'green' },
              styles.Button
            ]}
          >
            <Text>Pressione para mudar de cor</Text>
          </Pressable>

          <Button title='Alert' color='orange' onPress={() =>
            Alert.alert('Mensagem', 'Esta é a mensagem do alert', [
              {
                text: 'OK', 
                onPress: () => console.log('Botão OK pressionado')
              },
              {
                text: 'Cancelar',
                onPress: () => console.log('Botão cancelar pressionado')
              },
            ])
          }></Button>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  Button: {
    marginTop: 5,
    borderRadius: 5,
    padding: 5,
    width: '97%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
});
