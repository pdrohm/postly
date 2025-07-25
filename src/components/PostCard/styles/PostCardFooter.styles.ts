import { StyleSheet } from "react-native";

export const postCardFooterStyles = StyleSheet.create({
  footer: {
    paddingHorizontal: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#222",
    lineHeight: 20,
    marginBottom: 8,
  },
  createdAt: {
    fontSize: 12,
    color: "#888",
    marginTop: 8,
  },
}); 