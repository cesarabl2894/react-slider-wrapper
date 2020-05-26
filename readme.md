## React Slick Slider Wrapper
The purpose of this project is to make a wrap for the popular library react-slick adding some custom methods and yes, the instagram Dots... :)

The usage is pretty the same as the normal slick, and you can send the settings via props, all the properties are the same as the Slick Slider

```js
import { SliderWrapper } from 'react-slider-wrapper';

<SliderWrapper>
  <img src="path-to-image"/>
  <img src="path-to-image"/>
  <img src="path-to-image"/>
</SliderWrapper>
```

You can show the couter by adding on the props  showCounter and hide the Instagram dots via sending dots=false
```js 
<SliderWrapper settings={ {dots: false} } showCounter={ true } >
```

Also, custom the Instagram Dots using the numDots property on the settings props of the Component, by default is setup to 3

```js 
<SliderWrapper settings={{numDots: 5}}>

```