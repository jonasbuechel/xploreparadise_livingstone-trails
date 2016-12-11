import Ember from 'ember';

export default Ember.Mixin.create({
  backgroundimage: false,
  backgroundStyleCode: Ember.computed('backgroundimage', function(){
    let backgroundimage = this.get('backgroundimage');
    const isParallax = this.get('isParallax');
    
    if(backgroundimage && isParallax !== true){
      return `background-image:url("/assets/${backgroundimage}")`;
    } else {
      return false;
    }
  }),
  backgroundImagePath: Ember.computed('backgroundimage', function(){
    let backgroundimage = this.get('backgroundimage');
    if(backgroundimage){
      return `/assets/${backgroundimage}`;
    }
  })
});
