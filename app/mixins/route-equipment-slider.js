import Ember from 'ember';

export default Ember.Mixin.create({
  equipmentSlider: {
    sliderSettings: {
      responsiveSettings: [
        {
          breakpoint:1200,
          settings:{
            slidesToShow:4,
            infinite:true
          }
        },
        {
          breakpoint:992,
          settings:{
            slidesToShow:3,
            infinite:true
          }
        },
        {
          breakpoint:768,
          settings:{
            slidesToShow:2,
            dots:true}
        }
      ]
    }
  }
});
