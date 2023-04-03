import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  PanResponder,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
const WINDOW_HEIGHT = Dimensions.get('screen').height;
const INITAL_POSITION_VALUE = 250;
const DraggableBottomModal = ({isOpen}: {isOpen: boolean}) => {
  const animatedValue = useRef(new Animated.ValueXY({y: 0, x: 0})).current;

  useEffect(() => {
    //on open modal
    if (isOpen) {
      Animated.timing(animatedValue, {
        duration: 150,
        toValue: {y: INITAL_POSITION_VALUE, x: 0},
        useNativeDriver: true,
      }).start(() => {
        animatedValue.extractOffset();
      });
    }
  }, []);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderMove: (e, gesture) => {
      animatedValue.y.setValue(-gesture.dy);
    },
    onPanResponderRelease: (e, gesture) => {
      animatedValue.extractOffset();

      if (-gesture.dy > 100) {
        console.log('es mayor');
        Animated.spring(animatedValue, {
          toValue: {y: 150, x: 0},
          useNativeDriver: true,
        }).start(() => {
          // animatedValue.extractOffset();
        });
      } else if (Math.abs(gesture.dy) < 100) {
        // animatedValue.extractOffset();
        console.log(animatedValue.y);
        console.log('es menor');
        Animated.spring(animatedValue, {
          toValue: {y: INITAL_POSITION_VALUE, x: 0},
          useNativeDriver: true,
        }).start(() => animatedValue.extractOffset());
      }

      // if (Math.abs(moveGestureY) < 100) {
      //   console.log('Es menor a 100');
      //   Animated.spring(animatedValue, {
      //     toValue: {y: Number(animatedValue.y) - WINDOW_HEIGHT * 0.4, x: 0},
      //     useNativeDriver: true,
      //   }).start();
      // }

      // if (gesture.dy > 0) {
      //   // dragging down
      //   if (gesture.dy <= 50) {
      //     springAnimation('up');
      //   } else {
      //     springAnimation('down');
      //   }
      // } else {
      //   // dragging up
      //   if (gesture.dy >= -50) {
      //     springAnimation('down');
      //   } else {
      //     springAnimation('up');
      //   }
      // }
    },
  });

  const springAnimation = (direction: 'up' | 'down') => {
    // lastGestureDy.current = direction === 'down' ? 0 : -400;

    let direc = direction === 'up' ? 1 : -1;

    Animated.spring(animatedValue, {
      toValue: direc * 400,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.y.interpolate({
          inputRange: [-800, 800],
          outputRange: [800, -800],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  return (
    // <View style={styles.container}>
    <Animated.View style={[styles.bottomSheet, {...bottomSheetAnimation}]}>
      <Animated.View style={styles.draggableArea} {...panResponder.panHandlers}>
        <View style={styles.dragHandle} />
      </Animated.View>
    </Animated.View>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    zIndex: 50,
    borderWidth: 1,
  },
  bottomSheet: {
    zIndex: 55,
    position: 'absolute',
    width: '100%',
    height: 800,
    bottom: -700,
    ...Platform.select({
      android: {elevation: 3},
      ios: {
        shadowColor: '#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  draggableArea: {
    width: '100%',
    height: 32,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dragHandle: {
    width: 100,
    height: 6,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
  },
});

export default DraggableBottomModal;
