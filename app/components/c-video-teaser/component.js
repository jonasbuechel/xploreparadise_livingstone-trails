import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['c-video-teaser'],
  src: false,
  srcComplete: 'bla',
  title: false,
  subtitle: false,
  href: 'href1',
  backgroundimage: false,
  backgroundStyleCode: Ember.computed('backgroundimage', function(){
    let backgroundimage = this.get('backgroundimage');
    if(backgroundimage){
      return `background-image:url("/assets/${backgroundimage}")`;
    }
  }),
  attributeBindings: ['href','title']
});
