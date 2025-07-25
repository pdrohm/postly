import { StyleSheet } from "react-native";

export const latestCommentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },
  fallbackAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  fallbackText: {
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  timestamp: {
    color: '#888',
    fontSize: 10,
    marginLeft: 8,
  },
  text: {
    color: '#222',
    fontSize: 14,
    marginTop: 2,
  },
}); 