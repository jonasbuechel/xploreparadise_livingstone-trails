import Ember from 'ember';
import mixinComponentBackgroundImage from '../../mixins/component-background-image';

export default Ember.Component.extend(mixinComponentBackgroundImage,{
  tagName: 'section',
  classNames: ['c-section'],
  isConstrained: false,
  isConstrainedInside: false,
  isInProgress: false,
  parallaxBackgroundRatio: false,
  isParallax50: false,
  isParallax75: false,
  isParallax125: false,
  isParallax150: false,
  classNameBindings: ['isInProgress:c-section--in-progress', 'isConstrained:container', 'isParallax125:c-section--background-parallax-125', 'isParallax150:c-section--background-parallax-150', 'isParallax75:c-section--background-parallax-75', 'isParallax50:c-section--background-parallax-50'],
  attributeBindings: ['backgroundStyleCode:style','parallaxBackgroundRatio:data-stellar-background-ratio']
});
