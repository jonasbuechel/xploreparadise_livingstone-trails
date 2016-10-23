import Ember from 'ember';

export default Ember.Route.extend({  
  model(){
    
    return {
     about: {
        h2: 'ABOUT THE ORGINATOR AND ADVENTURER',
        h3: 'The person behind Xploreparadise',
        p1: 'As a young boy, Christoph Tänzer began his deep love of exploration, adventure and nature, dreaming about foreign countries, intriguing places and different cultures. More than 30 years later, these dreams came true for the German creative director, photographer and filmmaker. His passion developed into an idea: Winning people’s understanding through photography and film to protect our planet.',
        p2: '“I tell stories by capturing moments that show the beauty of our planet and the variety of its wildlife, people and cultures. If people understand that some of these moments, places, animals or people will be rare or gone in a couple of years, it’s a start. If they decide to change something, it will make a difference and my mission will have been successful.”'
      }
    }
  }
});
