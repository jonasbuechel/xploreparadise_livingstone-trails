import Ember from 'ember';
import mixinComponentBackgroundImage from '../../mixins/component-background-image';

export default Ember.Component.extend(mixinComponentBackgroundImage,{
  tagName: 'a',
  classNames: ['c-video-teaser'],
  title: false,
  subtitle: false,
  attributeBindings: ['title'],
  didInsertElement(){
    const backgroundContainer = this.element.querySelector('.c-video-teaser__background');

    backgroundContainer.style.backgroundImage = `url("${this.get('backgroundImagePath')}")`;
  },
  click(){
    let youtubeId = this.get('youtubeId');
    this.get('showVideo')(youtubeId);
  }
});
