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
      const isSmartphone = this.get('media.isXs');
      
      if(isSmartphone === true){
        const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
        window.open(youtubeUrl);
      } else {
        this.set('videoId', youtubeId)
        this.set('showVideoModal', true);
      }
      
    }
  },
});
