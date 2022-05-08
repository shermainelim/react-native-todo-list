import React, { useState, useEffect } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const onInputChange = (input) => {
    setInput(input);
  };
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
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
            if (!editTodo) {
              setTodos([
                ...todos,
                { id: Date.now(), title: input, completed: false },
              ]);
              setInput("");
            } else {
              updateTodo(input, editTodo.id, editTodo.completed);
            }
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
