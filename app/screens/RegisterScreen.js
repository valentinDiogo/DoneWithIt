import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import AppText from "../components/Text";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <AppText style={styles.title}>Créer un compte</AppText>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Nom d'utilisateur"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="E-mail"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Mot de passe"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="S'INSCRIRE" />
      </Form>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <AppText style={styles.redirection}>
            Vous avez déjà un compte ?
          </AppText>
          <AppText style={styles.link}> Connectez-vous !</AppText>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },
  redirection: {
    fontSize: 16,
    paddingVertical: 10,
    textAlign: "center",
  },
  link: {
    fontSize: 16,
    paddingVertical: 10,
    textAlign: "center",
    color: colors.link,
  },
});

export default RegisterScreen;
