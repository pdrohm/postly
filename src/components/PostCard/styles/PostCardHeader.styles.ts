import { StyleSheet } from "react-native";

export const postCardHeaderStyles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
  },
}); 