import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  drawer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    backgroundColor: '#fafbfc',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowOffset: { width: -4, height: 0 },
    overflow: 'hidden',
  },
  safeArea: {
    flex: 1,
    padding: 24,
  },
  dragIndicatorContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  dragIndicator: {
    width: 40,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#d1d5db',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#e1e4e8',
    marginBottom: 8,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#222',
    alignSelf: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 8,
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#222',
  },
  logoutContainer: {
    marginTop: 32,
    alignItems: 'center',
  },
});

export default styles; 