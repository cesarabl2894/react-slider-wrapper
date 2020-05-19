## React Slick Slider Wrapper
The purpose of this project is to make a wrap for the popular library react-slick adding some custom methods and yes, the instagram Dots... :)

The usage is pretty the same as the normal slick, and you can send the settings via props, all the properties are the same as the Slick Slider

```js
import SiteSlider from 'react-slider-wrapper';

<SiteSlider>
  <img src="path-to-image"/>
  <img src="path-to-image"/>
  <img src="path-to-image"/>
</SiteSlider>
```

You can show the couter by adding on the props on the settings props, the showCounter property and hide the Instagram dots via sending dots=false
```js 
<SiteSlider settings={showCounter: true, dots: false}>
```

Also, custom the Instagram Dots using the numDots property on the settings props of the Component, by default is setup to 3

```js 
<SiteSlider settings={numDots: 5}>

```