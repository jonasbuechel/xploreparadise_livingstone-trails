import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['c-section'],
  isConstrained: false,
  isInProgress: false,
  backgroundimage: false,
  backgroundStyleCode: Ember.computed('backgroundimage', function(){
    let backgroundimage = this.get('backgroundimage');
    if(backgroundimage){
      return `background-image:url("${backgroundimage}")`;
    }
  }),
  classNameBindings: ['isInProgress:c-section--in-progress', 'isConstrained:container'],
  attributeBindings: ['backgroundStyleCode:style']
});
