import TodoItem from "@/components/TodoItem";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function TodoListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TO DO List</Text>

      <View style={styles.list}>
      <TodoItem text="Learn React Native" />
      <TodoItem text="Build a static UI" />
      <TodoItem text="Practice with StyleSheet" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  list: {
    marginTop: 10,
  },
});