import Ember from 'ember';
import mixinComponentBackgroundImage from '../../mixins/component-background-image';

export default Ember.Component.extend(mixinComponentBackgroundImage,{
  tagName: 'section',
  classNames: ['c-section'],
  isConstrained: false,
  isConstrainedInside: false,
  isInProgress: false,
  isParallax: false,
  _isParallaxEnabled: function(){
    if(this.get('media.isXs') === true){
      return false;
    } else {
      return this.get('isParallax');
    }
  },
  classNameBindings: [
    'isInProgress:c-section--in-progress',
    'isConstrained:container'
  ],
  _setBackground: function(){
    const backgroundImage = this.get('backgroundImagePath');
    const isParallaxEnabled = this._isParallaxEnabled();

    if(backgroundImage !== undefined){
      const $element = Ember.$(this.element);
      
      if(isParallaxEnabled === true){
        this.element.style.backgroundImage = 'none';
        $element.parallax({
          imageSrc: this.get('backgroundImagePath')
        });
      } else {
        //Destroy parallax, if previous instance exists
        if($element.data('px.parallax')){
          $element.parallax('destroy');
        }
        //Set Background
        this.element.style.backgroundImage  = `url("${this.get('backgroundImagePath')}")`;
      }
    }
  },
  didInsertElement(){
    this._setBackground();
  },
  init() {
    this._super(...arguments);
    this.get('resizeService').on('debouncedDidResize', () => {
      this._setBackground();
    });
  }
});
