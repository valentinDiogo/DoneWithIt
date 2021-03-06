import React from "react";
import { StyleSheet, Image, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AppText from "../components/Text";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
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
        <SubmitButton title="Connexion" />
      </Form>
      <TouchableWithoutFeedback onPress={() => navigation.navigate("Register")}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <AppText style={styles.redirection}>
            Vous n'avez pas de compte ?
          </AppText>
          <AppText style={styles.link}> Inscrivez-vous !</AppText>
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
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginBottom: 20,
  },
});

export default LoginScreen;
