import React, { useRef, ReactNode } from 'react'
import { Animated, SafeAreaView, FlatList, ViewStyle } from 'react-native'

import HeaderWrapper from './HeaderWrapper'

type ANScrollableScreenProps = {
  ExtentionComp?: ReactNode
  StickyComp?: ReactNode
  LeftHeaderComp?: ReactNode
  RightHeaderComp?: ReactNode
  SubHeaderIconComp?: ReactNode
  RenderDataItems?: Function
  imageURI?: string
  imageSrc?: number
  avatarContainerStyle?: ViewStyle
  headerContainerStyle?: ViewStyle
}

function ANScrollableScreen({
  ExtentionComp,
  StickyComp,
  LeftHeaderComp,
  RightHeaderComp,
  SubHeaderIconComp,
  RenderDataItems,
  imageURI,
  imageSrc,
  avatarContainerStyle,
  headerContainerStyle,
  ...props
}: ANScrollableScreenProps) {
  const offset = useRef(new Animated.Value(0)).current
  return (
    <SafeAreaView>
      <HeaderWrapper
        animatedValue={offset}
        LeftHeaderComp={LeftHeaderComp}
        RightHeaderComp={RightHeaderComp}
        SubHeaderIconComp={SubHeaderIconComp}
        imageURI={imageURI}
        imageSrc={imageSrc}
        avatarContainerStyle={avatarContainerStyle}
        headerContainerStyle={headerContainerStyle}
      />
      <FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          {
            useNativeDriver: false
          }
        )}
        scrollEventThrottle={16}
        bounces={false}
        data={[ExtentionComp, StickyComp, RenderDataItems?.()]}
        renderItem={({ item }) => item}
        stickyHeaderIndices={[1]}
        keyExtractor={() => `${Math.random()}`}
        {...props}
      />
    </SafeAreaView>
  )
}

export default ANScrollableScreen
