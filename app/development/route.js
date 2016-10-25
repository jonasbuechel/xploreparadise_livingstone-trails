import Ember from 'ember';

export default Ember.Route.extend({  
  model(){
    return {
      equipment: {
        p1: 'Christoph Tänzer operates with gear from',
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
    };
  }
});
