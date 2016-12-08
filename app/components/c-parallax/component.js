import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement(){
    const isSmartphone = this.get('media.isXs');
    
    if(isSmartphone === false){
      $.stellar({
        horizontalScrolling: false,
        verticalScrolling: true,
        responsive: true,
        horizontalOffset: window.innerHeight / 2
      });
    }
  }
});
