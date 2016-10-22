import Ember from 'ember';

export default Ember.Controller.extend({
  youtubeIntroPlayerVars: {
    autoplay: 1,
    rel: 0
  },
  showVideoModal: false,
  videoId: undefined,
  actions: {
    openYouTubeModal(youtubeId){
      this.set('videoId', youtubeId)
      this.set('showVideoModal', true);
    }
  },
});
