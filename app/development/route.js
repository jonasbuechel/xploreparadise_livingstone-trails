import Ember from 'ember';
import mixinRouteMainGallery from '../mixins/route-main-gallery';
import mixinRouteEquipmentSlider from '../mixins/route-equipment-slider';
import mixinRouteTextContent from '../mixins/route-text-content';
import mixinRouteVideoTeaser from '../mixins/route-video-teaser';

export default Ember.Route.extend(mixinRouteMainGallery,mixinRouteEquipmentSlider,mixinRouteTextContent,mixinRouteVideoTeaser,{  
  model(){
    return {
      equipment: {
        text: [
          {
            content:'Christoph Tänzer operates with gear from'
          }
        ],
        responsiveSettings: this.get('sliderSettings.responsiveSettings')
      }
    };
  }
});
