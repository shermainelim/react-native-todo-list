import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Form from "./components/Form";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodos] = useState(null);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header title="To-Do List" color="skyblue" />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodos}
      />
      <View>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodos}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
