import { StyleSheet } from "react-native";

export const animatedHeartStyles = StyleSheet.create({
  heartContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -60, // -size/2
    marginTop: -60, // -size/2
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
    pointerEvents: "none",
  },
  heart: {
    textAlign: "center",
    textAlignVertical: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
}); 