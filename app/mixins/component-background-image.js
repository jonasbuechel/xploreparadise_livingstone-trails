import Ember from 'ember';

export default Ember.Mixin.create({
  backgroundimage: false,
  backgroundStyleCode: Ember.computed('backgroundimage', function(){
    let backgroundimage = this.get('backgroundimage');
    
    return `background-image:url("/assets/${backgroundimage}")`;
  }),
  backgroundImagePath: Ember.computed('backgroundimage', function(){
    let backgroundimage = this.get('backgroundimage');
    if(backgroundimage){
      return `/assets/${backgroundimage}`;
    }
  })
});
