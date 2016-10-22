import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return {
      mainGallery: {
        imgLogo: '',
        handle: '#XPLOREPARADISE',
        rootPath: 'assets/mainGallery/',
        items: [
          {src:'05_xploreparadise_tlt.jpg'},
          {src:'06_xploreparadise_tlt.jpg'},
          {src:'07_xploreparadise_tlt.jpg'},
          {src:'12_xploreparadise_tlt.jpg'},
          {src:'16_xploreparadise_tlt.jpg'},
          {src:'17_xploreparadise_tlt.jpg'},
          {src:'18_xploreparadise_tlt_fb.png'},
          {src:'20_xploreparadise_tlt_fb.jpg'},
          {src:'23_xploreparadise_tlt_fb.jpg'},
          {src:'24_xploreparadise_tlt_fb.jpg'},
          {src:'25_xploreparadise_tlt_fb.jpg'},
          {src:'32_xploreparadise_tlt_fb.jpg'},
          {src:'33_xploreparadise_tlt_fb.jpg'},
          {src:'46_xploreparadise_tlt_fb.jpg'},
          {src:'53_xploreparadise_tlt_fb.jpg'},
          {src:'54_xploreparadise_tlt_fb.jpg'},
          {src:'58_xploreparadise_tlt_fb.jpg'},
          {src:'60_xploreparadise_tlt_fb.jpg'},
          {src:'61_xploreparadise_tlt.jpg'}
        ] 
      }
    }
  }
});
