import Ember from 'ember';
import mixinComponentBackgroundImage from '../../mixins/component-background-image';

export default Ember.Component.extend(mixinComponentBackgroundImage,{
  tagName: 'section',
  classNames: ['c-section'],
  isConstrained: false,
  isConstrainedInside: false,
  isInProgress: false,
  isParallax: false,
  isParallaxEnabled: Ember.computed(function(){
    const isSmartphone = this.get('media.isXs');
    if(isSmartphone === true){
      return false;
    } else {
      return this.get('isParallax');
    }
  }),
  classNameBindings: [
    'isInProgress:c-section--in-progress',
    'isConstrained:container'
  ],
  _setBackground: function(){
    const backgroundImage = this.get('backgroundImagePath');

    if(backgroundImage !== undefined){
      const $element = $(this.element);
      
      if(this.get('isParallaxEnabled') === true){
        $element.parallax({
          imageSrc: this.get('backgroundImagePath')
        });
      } else {
        //Destroy parallax, if previous instance exists
        if($element.data('px.parallax')){
          $element.parallay('destroy');
        }
        //Set Background
        this.element.style.backgroundImage  = `url("${this.get('backgroundImagePath')}")`;
      }
    }
  },
  didInsertElement(){
    this._setBackground();
  }
});
