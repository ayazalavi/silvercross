import {StyleSheet} from 'react-native';

const tracker = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  menu: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: '#f4f4f4',
    height: 159,
    flexDirection: 'row',
    justifyContent: 'center',
    top: -100,
    zIndex: -1,
  },
  menuButton1: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 18,
    marginLeft: 40,
  },
  menuButton2: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 18,
    marginRight: 40,
  },
  menuButtonSelected: {
    color: '#64CFD1',
    textTransform: 'uppercase',
    fontFamily: 'Rubik-Medium',
    fontSize: 12,
  },
  menuButtonUnSelected: {
    color: '#7A838E',
    textTransform: 'uppercase',
    fontFamily: 'Rubik-Medium',
    fontSize: 12,
  },
  whiteButton: {
    width: 56,
    height: 56,
    shadowColor: 'rgba(0,0,0, 0.16)',
    shadowOffset: {width: 0, height: 13},
    shadowRadius: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapButtons: {
    position: 'absolute',
    right: 30,
    bottom: 100,
  },
  form: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginTop: -50,
    marginHorizontal: 30,
    paddingVertical: 30,
    paddingHorizontal: 28,
    alignItems: 'center',
  },
  formTitle: {
    fontFamily: 'Rubik-Regular',
    fontSize: 14,
    color: '#7A838E',
    marginBottom: 12,
  },
  formInputCont: {
    width: '100%',
    height: 45,
    marginTop: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 26,
    borderRadius: 23,
    justifyContent: 'center',
  },
  formIcon: {
    zIndex: 2,
    position: 'absolute',
    height: 21,
    width: 21,
    marginLeft: 19,
  },
  formInput: {
    height: 45,
    width: '100%',
    borderColor: '#F2F2F2',
    borderWidth: 1,
    borderRadius: 23,
    zIndex: 1,
    paddingHorizontal: 50,
    fontFamily: 'Rubik-Regular',
    fontSize: 10,
    color: '#7A838E',
  },
  distance: {
    marginTop: 31,
    flexDirection: 'row',
    alignItems: 'center',
  },
  terrain: {
    marginTop: 31,
    alignItems: 'flex-start',
    width: '100%',
  },
  distanceLabel: {
    fontFamily: 'Rubik-Regular',
    fontSize: 10,
    color: '#7A838E',
  },
  distanceMiles: {
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    color: '#7A838E',
  },
  formButton: {
    backgroundColor: '#64CFD1',
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    marginTop: 31,
  },
  formButtonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Rubik-Medium',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  greenBorder: {width: 22, height: 2, backgroundColor: '#64CFD1'},
  walk: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 21,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F7F7F7',
    shadowColor: 'rgba(0,0,0,0.7)',
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 18,
    flexDirection: 'row',
    flex: 3,
    alignItems: 'center',
  },
  walkScroll: {
    flex: 1,
    top: -96,
    marginHorizontal: 30,
    marginBottom: 5,
  },
  walkHeader: {
    marginVertical: 13,
    width: '100%',
  },
  walkPhoto: {
    borderWidth: 2,
    width: 45,
    height: 45,
    backgroundColor: 'gray',
    borderRadius: 22,
    borderColor: 'white',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 26,
    shadowColor: 'rgba(0,0,0,0.1)',
  },
  walkTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: 14,
    color: '#7A838E',
  },
  walkDetails: {flex: 2, marginHorizontal: 18, alignItems: 'flex-start'},
  walkSubtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  walkIcon: {width: 15, height: 15},
  walkSubtitleText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 8,
    color: '#7A838E',
    paddingHorizontal: 4,
  },
  walkPopoverContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    position: 'absolute',
    zIndex: 10,
    flex: 1,
  },
  walkPopover: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: 10,
  },
  walkPopoverImage: {
    top: -53,
    width: 106,
    height: 106,
  },
  walkPopoverButton: {
    backgroundColor: '#64CFD1',
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    marginTop: 31,
    width: 250,
  },
  walkPopoverDetails: {},
  
});
export default tracker;
