

import React, {Component} from 'react';
import {
    NativeModules,
    findNodeHandle
} from 'react-native';

module.exports = function (ref, debug) {
  const handle = findNodeHandle(ref);
  setTimeout(() => {
    NativeModules.UIManager.measure(handle, (x, y, width, height, pageX, pageY) => {
      if (debug) {
        console.log(x, y, width, height, pageX, pageY);
      }
      ref._currentPosition(pageX, pageY);
    });
  }, 0);
};
