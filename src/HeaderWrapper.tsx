import React, { ReactNode } from 'react'
import { Animated, ViewStyle } from 'react-native'
import Header from './Header'
import Avatar from './Avatar'

type HeaderWrapperProps = {
  animatedValue: Animated.Value
  LeftHeaderComp?: ReactNode
  RightHeaderComp?: ReactNode
  SubHeaderIconComp?: ReactNode
  imageURI?: string
  imageSrc?: number
  avatarContainerStyle?: ViewStyle
  headerContainerStyle?: ViewStyle
}

const HeaderWrapper = ({
  animatedValue,
  LeftHeaderComp,
  RightHeaderComp,
  SubHeaderIconComp,
  imageURI,
  imageSrc,
  avatarContainerStyle,
  headerContainerStyle
}: HeaderWrapperProps) => {
  return (
    <>
      <Header
        animatedValue={animatedValue}
        LeftHeaderComp={LeftHeaderComp}
        RightHeaderComp={RightHeaderComp}
        SubHeaderIconComp={SubHeaderIconComp}
        imageURI={imageURI}
        imageSrc={imageSrc}
        headerContainerStyle={headerContainerStyle}
      />
      <Avatar
        animatedValue={animatedValue}
        imageURI={imageURI}
        imageSrc={imageSrc}
        avatarContainerStyle={avatarContainerStyle}
      />
    </>
  )
}

export default HeaderWrapper
