import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['c-section', 'container'],
  classNameBindings: ['isInProgress:c-section--in-progress'],
  isInProgress: false,
  backgroundimage: false,
  attributeBindings: ['backgroundimage']
});
