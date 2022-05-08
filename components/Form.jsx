import React, { useState, useEffect } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (input) => {
    setInput(input);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        alignItems: "center",
      }}
    >
      <View
        style={{ borderWidth: 3, borderRadius: 10, padding: 10, width: 250 }}
      >
        <View>
          <TextInput
            placeholder="Enter a Todo..."
            value={input}
            onChangeText={onInputChange}
          ></TextInput>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          disabled={input.length === 0 ? true : false}
          onPress={() => {
            setInput("");
          }}
        >
          <MaterialCommunityIcons
            style={{ padding: 5 }}
            name="backspace-outline"
            size={30}
            color={input.length ? "black" : "grey"}
          />
        </TouchableOpacity>

        <TouchableOpacity
          disabled={input.length === 0 ? true : false}
          onPress={() => {
            setTodos((todos) => [
              { id: Date.now(), title: input, completed: false },
              ...todos,
            ]);
            console.log(todos);
            setInput("");
          }}
        >
          <MaterialCommunityIcons
            style={{ padding: 5 }}
            name="check-circle-outline"
            size={30}
            color={input.length ? "black" : "grey"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Form;
