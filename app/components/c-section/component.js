import Ember from 'ember';
import mixinComponentBackgroundImage from '../../mixins/component-background-image';

export default Ember.Component.extend(mixinComponentBackgroundImage,{
  tagName: 'section',
  classNames: ['c-section'],
  isConstrained: false,
  isConstrainedInside: false,
  isInProgress: false,
  classNameBindings: ['isInProgress:c-section--in-progress', 'isConstrained:container'],
  attributeBindings: ['backgroundStyleCode:style']
});
