import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TodoList = ({ todos, setTodos, editTodo, setEditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        console.log(item);
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 10,
              width: 320,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 5,
              borderWidth: 3,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: item.completed ? "grey" : "black",
                textDecorationLine: item.completed ? "line-through" : "none",
              }}
            >
              {item.title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                paddingleft: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  handleDelete(item);
                }}
              >
                <MaterialCommunityIcons
                  style={{ paddingRight: 5 }}
                  name="trash-can-outline"
                  size={24}
                  color="red"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleEdit(item);
                }}
              >
                <MaterialCommunityIcons
                  style={{ paddingRight: 5 }}
                  name="pencil"
                  size={24}
                  color="teal"
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  handleComplete(item);
                }}
              >
                <MaterialCommunityIcons
                  style={{ paddingRight: 5 }}
                  name="check-circle-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TodoList;
