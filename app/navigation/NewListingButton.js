import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "../components/Text";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <MaterialCommunityIcons
            name="plus-circle"
            color={colors.white}
            size={25}
          />
        </View>
        <AppText style={styles.text}>Vendre</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 25,
    borderWidth: 10,
    height: 50,
    justifyContent: "center",
    width: 50,
  },
  container: {
    bottom: 15,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: colors.medium,
  },
});

export default NewListingButton;
