# react-native-animated-scrollable-screen
Lightweight Scrollable screen wrapper with header animation and sticky section.

https://user-images.githubusercontent.com/38687453/143775880-d67f14c1-2ba1-4f7a-aeb6-2fe57dacd7b4.mp4

# Installation
```
npm install react-native-animated-scrollable-screen --save
```
or
```
yarn add react-native-animated-scrollable-screen
```

# Usage
```
import { ANScrollableScreen } from 'react-native-animated-scrollable-screen'
<ANScrollableScreen
  ExtentionComp={<ExtentionComp />}
  StickyComp={<StickyComp />}
  LeftHeaderComp={
    <View>
      <Button title={'Button'} />
    </View>
  }
  RightHeaderComp={
    <View>
      <Image
        style={styles.hederLRcompImg}
        source={require('./assets/bg.jpeg')}
      />
    </View>
  }
  SubHeaderIconComp={<Text>Ahmed Ashry</Text>}
  RenderDataItems={RenderItems}
  imageURI={'https://picsum.photos/seed/picsum/200/300'}
  imageSrc={require('./assets/bg.jpeg')}
  avatarContainerStyle={[styles.bgColor, styles.avatarContainerStyle]}
  headerContainerStyle={[styles.bgColor, styles.headerContainerStyle]}
/>
```

# Props
```
ExtentionComp
```
Custom React component
```
StickyComp
```
Custom React component

LeftHeaderComp
```
Custom React component

RightHeaderComp
```
Custom React component

SubHeaderIconComp
```
Custom React component

```
RenderDataItems
```
Function to render list items

```
imageURI
```
Remote image source

```
imageSrc
```
Local image source

```
avatarContainerStyle
```
Custom style to the main image container

```
headerContainerStyle
```
Custom style to the header container
