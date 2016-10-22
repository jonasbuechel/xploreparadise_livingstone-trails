import Ember from 'ember';

export default Ember.Route.extend({
  mainGalleryItems: Ember.computed(function() {

    let   imagesToReturn              = [];
    const mainGalleryRootPath         = 'assets/mainGallery/fullsize/';
    const mainGalleryThumbnailsPath   = 'assets/mainGallery/thumbnails/';
    const mainGalleryImageWidth       = 1200;
    const mainGalleryImageHeight      = 800;
    
    const imageObjects = [
        {src:'06_xploreparadise_tlt.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'07_xploreparadise_tlt.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'12_xploreparadise_tlt.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'16_xploreparadise_tlt.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'17_xploreparadise_tlt.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'18_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'20_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'23_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'24_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'25_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'32_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'33_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'46_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'53_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'54_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'58_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'60_xploreparadise_tlt_fb.jpg', title:'Hier steht ein text zum Bild -to be defined-'},
        {src:'61_xploreparadise_tlt.jpg', title:'Hier steht ein text zum Bild -to be defined-'}
      ];
    
    imagesToReturn = imageObjects.map(function(originalObject){
      
      let newObject = {};
      
      newObject.src   = mainGalleryRootPath + originalObject.src;
      newObject.msrc  = mainGalleryThumbnailsPath + originalObject.src;
      newObject.w     = mainGalleryImageWidth;
      newObject.h     = mainGalleryImageHeight;
      newObject.title = originalObject.title;
      
      return newObject;
    });
    
    return imagesToReturn;
  }),
  
  model(){
    const mainGalleryItems = this.get('mainGalleryItems');
    
    return {
      mainGallery: {
        items: mainGalleryItems
      }
    }
  }
});
