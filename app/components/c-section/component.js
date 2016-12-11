import Ember from 'ember';
import mixinComponentBackgroundImage from '../../mixins/component-background-image';

export default Ember.Component.extend(mixinComponentBackgroundImage,{
  tagName: 'section',
  classNames: ['c-section'],
  isConstrained: false,
  isConstrainedInside: false,
  isInProgress: false,
  isParallax: false,
  parallax: Ember.computed('isParallax',function(){
    if(this.get('isParallax') === true){
      return 'scroll';
    } else {
      return false;
    }
  }),
  classNameBindings: [
    'isInProgress:c-section--in-progress',
    'isConstrained:container',
    'isParallax:parallax-window'
  ],
  attributeBindings: [
    'backgroundStyleCode:style',
    'backgroundImagePath:data-image-src',
    'parallax:data-parallax'
  ],
  didInsertElement(){
    const isSmartphone = this.get('media.isXs');

    if(isSmartphone === false && this.get('isParallax') === true){
      console.log('insert2');
      $(this.element).parallax({
        imageSrc: this.get('backgroundImagePath')
      });
    }
  }
});
