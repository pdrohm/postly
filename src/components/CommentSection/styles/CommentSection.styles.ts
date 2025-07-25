import { StyleSheet } from 'react-native';

export const commentSectionStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputRow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fafafa',
    borderTopWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    zIndex: 10,
  },
  input: {
    flex: 1,
    minHeight: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
  },
  sendButton: {
    marginLeft: 8,
  },
  sendButtonText: {
    color: '#2980b9',
    fontWeight: 'bold',
    fontSize: 16,
  },
  commentItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginRight: 10,
  },
  commentText: {
    fontSize: 15,
  },
  commentMeta: {
    color: '#888',
    fontSize: 12,
  },
  emptyText: {
    color: '#888',
    textAlign: 'center',
    marginTop: 32,
  },
}); 