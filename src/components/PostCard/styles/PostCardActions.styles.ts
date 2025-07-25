import { StyleSheet } from "react-native";

export const postCardActionsStyles = StyleSheet.create({
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  leftActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 8,
    marginRight: 16,
    fontWeight: "bold",
    fontSize: 14,
    color: "#222",
  },
}); 