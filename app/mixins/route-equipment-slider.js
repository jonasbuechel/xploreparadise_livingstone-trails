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
    },
    sliderItems: [
      {
        src: 'logo_blackmagic.png',
        alt: 'Blackmagicdesign'
      },
      {
        src: 'logo_b_w.png',
        alt: 'B&W International'
      },
      {
        src: 'logo_canon.png',
        alt: 'Canon'
      },
      {
        src: 'logo_cullmann.png',
        alt: 'Cullmann'
      },
      {
        src: 'logo_hama.png',
        alt: 'hama'
      },
      {
        src: 'logo_peli.png',
        alt: 'PELI'
      },
      {
        src: 'logo_sandisk.png',
        alt: 'SanDisk'
      },
      {
        src: 'logo_tamron.png',
        alt: 'TAMRON'
      },
      {
        src: 'logo_vanguard.png',
        alt: 'VANGUARD'
      }
    ]
  }
});
