import React from "react";
import LottieView from "lottie-react-native";
import { View } from "react-native";

function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/load.json")}
      style={{ width: 100, alignSelf: "center" }}
    />
  );
}

export default ActivityIndicator;
