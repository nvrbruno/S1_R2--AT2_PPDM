import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.card}>

        <Text style={styles.titulo}>CADASTRO</Text>

          <TextInput
            placeholder="Digite seu nome"
            style={styles.input}
          />

          <TextInput
            placeholder="Digite seu e-mail"
            style={styles.input}
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Digite seu telefone"
            style={styles.input}
            keyboardType="phone-pad"
          />

          <TextInput
            placeholder="Digite data de nascimento"
            style={styles.input}
          />
        </View>

        <Button
          title="Fazer cadastro"
          color="orange"
          onPress={() =>
            Alert.alert('Mensagem', 'Cadastro feito com sucesso')
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },

  titulo: {
    marginBottom: 10,
    textAlign:'center'
  },

  card: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#d3d3d3',
    padding: 5,
    borderRadius: 5,
    shadowOpacity: 0.5,
    marginBottom: 20
  },

  input: {
    width: '95%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 5
  }
});