import Ember from 'ember';
import mixinRouteMainGallery from '../mixins/route-main-gallery';
import mixinRouteEquipmentSlider from '../mixins/route-equipment-slider';
import mixinRouteTextContent from '../mixins/route-text-content';
import mixinRouteVideoTeaser from '../mixins/route-video-teaser';

export default Ember.Route.extend(mixinRouteMainGallery,mixinRouteEquipmentSlider,mixinRouteTextContent,mixinRouteVideoTeaser,{
  model(){

    return {
      mainGallery: {
        items: this.get('mainGalleryItems')
      },
      textContent: this.get('textContent'),
      videoTeasers: this.get('videoTeasers')
    };
  }
});
