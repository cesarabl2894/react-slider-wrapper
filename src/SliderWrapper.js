import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';
import './assets/css/slick.min.css';
import './assets/css/theme.css';
import 'react-magic-slider-dots/dist/magic-dots.css';

class SliderWrapper extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      activeSlide: 0,
      slideCount: 0
    };
  }
  
  render() {
    const { children, settings, showCounter } = this.props;
    const sliderSettings = {
      arrows: true,
      dots: true,
      afterChange: (current) => this.setState({ activeSlide: current }),
      ...settings,
      appendDots: dots => {
        return (
          <MagicSliderDots 
            dots={dots} 
            numDotsToShow={ settings.numDots || 3 } 
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
        { showCounter ? <div>{ `${this.state.activeSlide + 1} / ${children.length}`}</div> : null }
      </Fragment>
    )
  }
}

SliderWrapper.defaultProps = {
  showCounter: false,
  settings: {}
}

SliderWrapper.propTypes = {
  settings: PropTypes.object,
  showCounter: PropTypes.bool
}

export default SliderWrapper;