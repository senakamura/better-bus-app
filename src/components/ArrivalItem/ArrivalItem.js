import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight
} from 'react-native'

import { Views } from './ArrivalItem.stylesheet';

const ArrivalItem = ({ arrival, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={ Views.container }>
        <Text style={Views.title}>{arrival.headsign}</Text>
        <Text style={Views.description}>Route: {arrival.route}</Text>
        <Text style={Views.description}>Arrives at: {arrival.stopTime}</Text>
        <Text style={Views.description}>ETA: {arrival.estimated} minute</Text>
      </View>
    </TouchableHighlight>
  )
}

export default ArrivalItem
