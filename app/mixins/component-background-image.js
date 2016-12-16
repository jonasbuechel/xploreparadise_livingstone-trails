import Ember from 'ember';
import config from '../config/environment';

export default Ember.Mixin.create({
  backgroundimage: false,
  backgroundStyleCode: Ember.computed('backgroundimage', function(){
    let backgroundimage = this.get('backgroundimage');
    
    return `background-image:url("/assets/${backgroundimage}")`;
  }),
  backgroundImagePath: Ember.computed('backgroundimage', function(){
    let backgroundimage = this.get('backgroundimage');
    if(backgroundimage){
      return `${config.rootURL}assets/${backgroundimage}`;
    }
  })
});
