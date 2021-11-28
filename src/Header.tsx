import React, { ReactNode, useMemo } from 'react'
import { StyleSheet, View, Image, Animated, ViewStyle } from 'react-native'

type HeaderProps = {
  animatedValue: Animated.Value
  LeftHeaderComp?: ReactNode
  RightHeaderComp?: ReactNode
  SubHeaderIconComp?: ReactNode
  imageURI?: string
  imageSrc?: number
  headerContainerStyle?: ViewStyle
}

const Header = ({
  animatedValue,
  LeftHeaderComp,
  RightHeaderComp,
  SubHeaderIconComp,
  imageURI,
  imageSrc,
  headerContainerStyle
}: HeaderProps) => {
  const animatedStyles = useMemo(
    () => ({
      opacity: animatedValue.interpolate({
        inputRange: [0, 150],
        outputRange: [-1, 1]
      })
    }),
    [animatedValue]
  )

  return (
    <View style={[styles.constainer, headerContainerStyle]}>
      <View style={styles.leftWrapper}>{LeftHeaderComp}</View>
      <View style={styles.avatarWrapper}>
        <Animated.View style={[styles.avatarWrapper, animatedStyles]}>
          <Image style={styles.image} source={imageSrc ? imageSrc : { uri: imageURI }} />
          {SubHeaderIconComp && SubHeaderIconComp}
        </Animated.View>
      </View>
      <View style={styles.rightWrapper}>{RightHeaderComp}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  constainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10
  },
  avatarWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftWrapper: {
    flex: 1,
  },
  rightWrapper: {
    flex: 1,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden'
  }
})

export default Header
