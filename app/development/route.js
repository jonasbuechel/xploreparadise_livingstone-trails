import Ember from 'ember';
import mixinRouteEquipmentSlider from '../mixins/route-equipment-slider';


export default Ember.Route.extend(mixinRouteEquipmentSlider, {  
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
