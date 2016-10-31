import Ember from 'ember';
import mixinRouteMainGallery from '../mixins/route-main-gallery';
import mixinRouteEquipmentSlider from '../mixins/route-equipment-slider';
import mixinRouteTextContent from '../mixins/route-text-content';

export default Ember.Route.extend(mixinRouteMainGallery,mixinRouteTextContent,{
  model(){

    return {
      mainGallery: {
        items: this.get('mainGalleryItems')
      },
      textContent: this.get('textContent'), 
      videoTeasers: [
        {
          youtubeId: '6vqFleiDX1A',
          backgroundimage: 'img_video_cheetahs.jpg',
          title: 'Cheethas',
          subtitle: 'With the meercats'
        },
        {
          youtubeId: 'K_MbZ2-UcJM',
          backgroundimage: 'img_video_meerkats.jpg',
          title: 'The guardian',
          subtitle: 'With the meercats'
        },
        {
          youtubeId: 'GWJ3-gBWFmU',
          backgroundimage: 'img_video_elephants.jpg',
          title: 'At the water hole',
          subtitle: 'Cheethas'
        },
        {
          youtubeId: 'OLsjeRDvjnk',
          backgroundimage: 'img_video_springboks.jpg',
          title: 'At the water hole',
          subtitle: 'Cheethas'
        }
        
      ]
    };
  }
});
