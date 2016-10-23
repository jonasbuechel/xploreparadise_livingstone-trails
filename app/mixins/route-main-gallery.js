import Ember from 'ember';

export default Ember.Mixin.create({
  mainGalleryItems: Ember.computed(function() {

    let   imagesToReturn              = [];
    const mainGalleryImageWidth       = 1200;
    const mainGalleryImageHeight      = 800;
    
    const imageObjects = [
        {
          msrc:   '/assets/mainGallery/thumbnails/06_xploreparadise_tlt.jpg', 
          src:    '/assets/mainGallery/fullsize/06_xploreparadise_tlt.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/07_xploreparadise_tlt.jpg', 
          src:    '/assets/mainGallery/fullsize/07_xploreparadise_tlt.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/12_xploreparadise_tlt.jpg' ,
          src:    '/assets/mainGallery/fullsize/12_xploreparadise_tlt.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/16_xploreparadise_tlt.jpg',  
          src:    '/assets/mainGallery/fullsize/16_xploreparadise_tlt.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/17_xploreparadise_tlt.jpg', 
          src:    '/assets/mainGallery/fullsize/17_xploreparadise_tlt.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/18_xploreparadise_tlt_fb.jpg',
          src:    '/assets/mainGallery/fullsize/18_xploreparadise_tlt_fb.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/20_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/20_xploreparadise_tlt_fb.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/23_xploreparadise_tlt_fb.jpg',
          src:    '/assets/mainGallery/fullsize/23_xploreparadise_tlt_fb.jpg',
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/24_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/24_xploreparadise_tlt_fb.jpg',
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/25_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/25_xploreparadise_tlt_fb.jpg',
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/32_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/32_xploreparadise_tlt_fb.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/33_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/33_xploreparadise_tlt_fb.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/46_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/46_xploreparadise_tlt_fb.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/53_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/53_xploreparadise_tlt_fb.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/54_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/54_xploreparadise_tlt_fb.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/58_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/58_xploreparadise_tlt_fb.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/60_xploreparadise_tlt_fb.jpg', 
          src:    '/assets/mainGallery/fullsize/60_xploreparadise_tlt_fb.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'},
        {
          msrc:   '/assets/mainGallery/thumbnails/61_xploreparadise_tlt.jpg', 
          src:    '/assets/mainGallery/fullsize/61_xploreparadise_tlt.jpg', 
          title:  'Hier steht ein text zum Bild -to be defined-'}
      ];
    
    imagesToReturn = imageObjects.map(function(originalObject){
      
      let newObject = {};
      
      newObject.src   = originalObject.src;
      newObject.msrc  = originalObject.msrc;
      newObject.w     = mainGalleryImageWidth;
      newObject.h     = mainGalleryImageHeight;
      newObject.title = originalObject.title;
      
      return newObject;
    });
    
    return imagesToReturn;
  }),
});
