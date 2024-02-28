import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

interface SignupScreenProps {
  navigation: any; // You might need to replace 'any' with a more specific type
  onSignupSuccess: () => void;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation, onSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Implement signup logic here
    // Example: Validate input, call registration function, etc.

    // If signup is successful, call onSignupSuccess to navigate to the home screen
    onSignupSuccess();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Signup</Text>
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
    height: 40,
    width: '100%',
    borderColor: COLORS.primaryLightGreyHex,
    borderBottomWidth: 1,
    marginBottom: SPACING.space_20,
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_16,
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

export default SignupScreen;
