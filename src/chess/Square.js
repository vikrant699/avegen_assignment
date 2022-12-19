import React from "react";
import { View, Image } from "react-native";

const Square = (props) => {
  return (
    <View style={props.style}>
      <Image source={props.src} />
    </View>
  );
};

export default Square;
