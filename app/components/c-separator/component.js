import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'hr',
  classNames: ['c-separator'],
  classNameBindings: ['isBig:c-separator--big', 'isDark:c-separator--dark'],
  isBig: false,
  isDark: false
});
