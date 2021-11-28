import React, { useMemo } from 'react'
import { Animated, StyleSheet, View, ViewStyle } from 'react-native'

type AvatarProps = {
  animatedValue: Animated.Value
  imageURI?: string
  imageSrc?: number
  avatarContainerStyle?: ViewStyle
}

const Avatar = ({
  animatedValue,
  imageURI,
  imageSrc,
  avatarContainerStyle
}: AvatarProps) => {
  const animatedStyles = useMemo(
    () => ({
      height: animatedValue.interpolate({
        inputRange: [0, 120],
        outputRange: [100, 0]
      }),
      width: animatedValue.interpolate({
        inputRange: [0, 120],
        outputRange: [100, 0]
      }),
      opacity: animatedValue.interpolate({
        inputRange: [0, 500],
        outputRange: [1, 0]
      }),
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 500],
            outputRange: [0, -150]
          })
        }
      ]
    }),
    [animatedValue]
  )

  return (
    <View style={[styles.constainer, avatarContainerStyle]}>
      <Animated.Image
        style={[styles.image, animatedStyles]}
        source={imageSrc ? imageSrc : { uri: imageURI }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  }
})

export default Avatar
