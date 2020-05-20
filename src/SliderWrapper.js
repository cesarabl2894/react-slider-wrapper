import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
import './css/slick.min.css';
// import './css/theme.css';

class SliderWrapper extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      activeSlide: 0,
      slideCount: 0
    };
  }
  
  render() {
    const { children, settings } = this.props;
    const sliderSettings = {
      arrows: true,
      dots: true,
      afterChange: (current) => this.setState({ activeSlide: current }),
      ...settings,
      appendDots: dots => {
        return (
          <MagicSliderDots 
            dots={dots} 
            numDotsToShow={settings.numDots || 3} 
            dotWidth={30} 
          />
        );
      },
    }
    return (
      <Fragment>
        <Slider {...sliderSettings}>
          {children}
        </Slider>
        { settings.showCounter ? <div>{ `${this.state.activeSlide + 1} / ${children.length}`}</div> : null }
      </Fragment>
    )
  }
}


export default SliderWrapper;