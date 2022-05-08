import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TodoList = ({ todos }) => {
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
            <Text>{item.title}</Text>
            <View
              style={{
                flexDirection: "row",
                paddingleft: 20,
              }}
            >
              <TouchableOpacity>
                <MaterialCommunityIcons
                  style={{ paddingRight: 5 }}
                  name="trash-can-outline"
                  size={24}
                  color="red"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  style={{ paddingRight: 5 }}
                  name="pencil"
                  size={24}
                  color="teal"
                />
              </TouchableOpacity>
              <TouchableOpacity>
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
