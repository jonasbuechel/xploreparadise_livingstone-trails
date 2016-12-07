import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement(){
    $.stellar({
      horizontalScrolling: false,
      verticalScrolling: true,
      responsive: true
    });
  }
});
