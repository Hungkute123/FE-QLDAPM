import React from 'react';
import { Category } from '../Category/Category';
import { Slideshow } from '../Slideshow/Slideshow';
import './MenuSlideshow.scss';

export const MenuSlideshow = () => {
    return (
  <div className="menuslideshow">
      <Category className="category__dropdown--show"/>
      <Slideshow listbanner={['test']}/>
  </div>

    )
}