import Ember from 'ember';
import mixinRouteMainGallery from '../mixins/route-main-gallery';


export default Ember.Route.extend(mixinRouteMainGallery,{  
  model(){
    
    return {
      mainGallery: {
        items: this.get('mainGalleryItems')
      }
    }
  }
});
