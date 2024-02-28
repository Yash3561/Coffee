// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

export interface LoginScreenProps {
    navigation: any; // Replace 'any' with a more specific type if possible
    onLoginSuccess: (navigation: any) => void;
  }
  
  const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const handleLogin = () => {
    // Implement login logic here
    // Example: Validate input, call authentication function, etc.

    // If login is successful, call onLoginSuccess to navigate to the home screen
    onLoginSuccess(navigation);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
    padding: SPACING.space_30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_20,
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: COLORS.primaryLightGreyHex,
    borderBottomWidth: 1,
    marginBottom: SPACING.space_10,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
  },
  button: {
    backgroundColor: COLORS.primaryOrangeHex,
    paddingVertical: SPACING.space_16,
    paddingHorizontal: SPACING.space_30,
    borderRadius: 10,
    marginTop: SPACING.space_20,
  },
  buttonText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
  },
});

export default LoginScreen;
