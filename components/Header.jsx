import React from "react";
import { View, Text } from "react-native";

//React.FC is a TypeScript
const Header = ({ title, color }) => {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: "black",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: color,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 30,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default Header;
