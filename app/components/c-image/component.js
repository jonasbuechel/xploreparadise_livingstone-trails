import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "picture",
  classNames:['c-image'],
  alt:false,
  is2x:false,
  src:false,
  srcComplete: Ember.computed('src', function(){
    let imgSrc = this.get('src');
    return `/assets/${imgSrc}`;
  }),
  attributeBindings: ['srcComplete:src'],
  classNameBindings:['is2x:c-image--2x']
});
