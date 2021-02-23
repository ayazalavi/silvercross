import React, {Component, createRef} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker, Callout, Polyline} from 'react-native-maps';
import DestinationMarker from '../common/DestinationMarker';
import WalkMeter from '../common/WalkMeter';
import Geolocation from '@react-native-community/geolocation';
import tracker from '../styles/tracker';
import RoundButton from '../common/RoundButton';
import UserLocationMarker from '../common/UserLocationMarker';
import {
  getWalks,
  MENU_EXPLORER,
  getDistance,
  getDirections,
  WALK_STATUS,
} from '../common/Consants';
import WalkMarker from '../common/WalkMarker';
let ref;
class WalkMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: 0,
      startWalk: false,
      markers:
        this.props.selected === MENU_EXPLORER
          ? {
              destMarker: this.props.walk,
            }
          : {},
    };
    this.destMarkerRef = createRef();
    this.userLocationMarkerRef = createRef();
    this.mapViewRef = createRef();
    this.meterRef = createRef();
    Geolocation.requestAuthorization();
    this.watchID = Geolocation.watchPosition(
      (position) => this.onUserLocationChange(position.coords),
      (error) => console.log(error),
      {enableHighAccuracy: true},
    );
  }

  getNearestDestination(curr) {
    // const curr = this.state.markers.currentLocation;
    if (curr) {
      let walks = getWalks();
      let shortestWalk, shortestDistance;
      walks.forEach((walk) => {
        const distance = getDistance(
          [walk.latitude, walk.longitude],
          [curr.latitude, curr.longitude],
          false,
        );
        if (!shortestDistance || distance < shortestDistance) {
          shortestDistance = distance;
          shortestWalk = walk;
        }
      });
      return shortestWalk;
    }
    return null;
  }

  componentDidMount() {}

  componentDidUpdate(prevProp, prevState) {
    //console.log('prev: ', prevState, this.state);
    // if (!prevState.markers.destMarker && this.state.markers.destMarker)
    //   this.showDestinationPopover();
    // if (prevState.startWalk !== this.state.startWalk) {
    //   if (this.state.startWalk) {
    //     Geolocation.requestAuthorization();
    //     this.watchID = Geolocation.watchPosition(
    //       (position) => this.onUserLocationChange(position.coords),
    //       (error) => console.log(error),
    //       {enableHighAccuracy: true},
    //     );
    //   } else {
    //     if (this.watchID) {
    //       Geolocation.clearWatch(this.watchID);
    //       this.watchID = null;
    //     }
    //   }
    // }
  }

  componentWillUnmount() {}

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log('next: ', nextState);
    return true;
  }

  componentDidCatch(error, errorInfo) {}

  showDestinationPopover() {
    console.log('dest');
    if (this.destMarkerRef.current) this.destMarkerRef.current.showCallout();
  }

  onMapReady() {
    this.showDestinationPopover();
    this.mapViewRef.current.fitToCoordinates(getWalks(), {
      edgePadding: {top: 250, right: 50, bottom: 100, left: 50},
      animated: true,
    });
  }

  onUserLocationChange(currentLocation) {
    //  const coordinate = nativeEvent.coordinate;

    // ? this.state.markers.destMarker
    // : this.getNearestDestination(currentLocation);
    //if (!this.state.lineDrawn)
    if (this.props.selected === MENU_EXPLORER) {
      let destMarker = this.state.markers.destMarker;
      if (this.state.startWalk) {
        const coords = this.state.markers.destMarker.coords;
        destMarker =
          coords !== undefined
            ? coords[coords.length - 1]
            : this.state.markers.destMarker;
      }
      getDirections(currentLocation, destMarker)
        .then((coords) =>
          this.setState(
            (prevState) => ({coords}),
            () =>
              this.mapViewRef.current.fitToCoordinates(this.state.coords, {
                edgePadding: {top: 250, right: 50, bottom: 100, left: 50},
                animated: true,
              }),
          ),
        )
        .catch((error) => console.log(error));
      this.setState((prevState) => ({
        distance:
          prevState.markers.currentLocation !== undefined
            ? prevState.distance +
              getDistance(
                [
                  prevState.markers.currentLocation.latitude,
                  prevState.markers.currentLocation.longitude,
                ],
                [currentLocation.latitude, currentLocation.longitude],
                false,
              )
            : 0,
        markers: {
          destMarker,
          currentLocation,
        },
      }));
    } else {
      this.setState(
        (prevState) => {
          return prevState.startWalk
            ? {
                markers: {currentLocation},
                coords:
                  prevState.coords !== undefined
                    ? prevState.coords.concat([currentLocation])
                    : [currentLocation],
                distance: prevState.markers.currentLocation
                  ? prevState.distance +
                    getDistance(
                      [
                        prevState.markers.currentLocation.latitude,
                        prevState.markers.currentLocation.longitude,
                      ],
                      [currentLocation.latitude, currentLocation.longitude],
                      false,
                    )
                  : 0,
              }
            : {markers: {currentLocation}, distance: 0, coords: undefined};
        },
        () => {
          if (this.state.startWalk) {
            this.mapViewRef.current.fitToCoordinates(this.state.coords, {
              edgePadding: {top: 250, right: 50, bottom: 100, left: 50},
              animated: true,
            });
          } else {
            this.mapViewRef.current.fitToElements(true);
          }
        },
      );
    }
  }

  render() {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -2,
        }}>
        <MapView
          style={{width: '100%', height: '100%'}}
          initialRegion={{
            latitude: 31.466249,
            longitude: 74.362756,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsMyLocationButton={false}
          showsUserLocation={false}
          userLocationPriority={'high'}
          userLocationUpdateInterval={1000}
          onMapReady={() => this.onMapReady()}
          onUserLocationChange={(event) => {
            console.log('event');
          }}
          ref={this.mapViewRef}>
          {this.state.markers.destMarker && (
            <Marker
              key={0}
              coordinate={this.state.markers.destMarker}
              calloutOffset={{x: -53, y: 0}}
              ref={this.destMarkerRef}>
              <DestinationMarker />
            </Marker>
          )}
          {this.state.markers.currentLocation && this.state.coords && (
            <Polyline
              coordinates={this.state.coords}
              strokeWidth={4}
              strokeColor="#FF3C60"
              style={{
                shadowColor: '#FF3C60',
                shadowOffset: {width: 0, height: 3},
                shadowRadius: 6,
              }}
            />
          )}
          {this.props.selected === MENU_EXPLORER &&
            getWalks().map((walk) => {
              if (
                !this.state.markers.destMarker ||
                walk.id !== this.state.markers.destMarker.id
              ) {
                return (
                  <Marker
                    key={walk.id + '-point'}
                    coordinate={{
                      latitude: walk.latitude,
                      longitude: walk.longitude,
                    }}>
                    <WalkMarker onPress={() => {}} />
                  </Marker>
                );
              }
            })}
          {this.state.markers.currentLocation && (
            <Marker
              key={1}
              coordinate={this.state.markers.currentLocation}
              ref={this.userLocationMarkerRef}>
              <UserLocationMarker
                location={this.state.markers.currentLocation}
              />
            </Marker>
          )}
        </MapView>
        {this.state.startWalk && (
          <WalkMeter
            distance={this.state.distance ? this.state.distance : 0}
            ref={this.meterRef}
          />
        )}

        <View style={tracker.mapButtons}>
          <RoundButton
            style={tracker.whiteButton}
            onPress={() => {}}
            imagePath={require('../../assets/map_icon_1.png')}
            imageStyle={{
              tintColor: '#7A838E',
            }}
          />
          <RoundButton
            style={tracker.whiteButton}
            onPress={() => {}}
            imagePath={require('../../assets/map_icon_2.png')}
            imageStyle={{
              tintColor: '#7A838E',
            }}
          />
          <RoundButton
            style={tracker.whiteButton}
            onPress={() =>
              this.setState((prevState) => {
                if (prevState.startWalk) {
                  this.props.updateWalkStatus(
                    WALK_STATUS.ENDED,
                    {
                      id: getWalks().length,
                      name: 'Walk Path ' + (getWalks().length + 1),
                      distance: this.state.distance / 1.6,
                      hours: this.meterRef.current.showDate(),
                      rating: 5,
                      photo: require('../../assets/photo_.png'),
                      latitude: this.state.coords[0].latitude,
                      longitude: this.state.coords[0].longitude,
                      coords: this.state.coords,
                    },
                    {},
                  );
                } else {
                  this.props.updateWalkStatus(
                    WALK_STATUS.STARTED,
                    this.state.markers.destMarker,
                    {},
                  );
                }
                return {
                  startWalk: !prevState.startWalk,
                  distance: 0,
                  coords: undefined,
                };
              })
            }
            imagePath={require('../../assets/map_icon_3.png')}
            imageStyle={{
              tintColor: this.state.startWalk ? '#FF3C60' : '#7A838E',
            }}
          />
        </View>
      </View>
    );
  }
}

export default WalkMap;
