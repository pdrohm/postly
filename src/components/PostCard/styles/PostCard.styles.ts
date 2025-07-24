import { StyleSheet } from 'react-native';

export const postCardStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#eee',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 16,
  },
  actionText: {
    fontSize: 14,
    marginRight: 16,
  },
  footer: {
    marginTop: 4,
  },
  description: {
    fontSize: 15,
    marginTop: 2,
    marginBottom: 2,
  },
  createdAt: {
    color: '#888',
    fontSize: 12,
    marginTop: 2,
  },
}); 