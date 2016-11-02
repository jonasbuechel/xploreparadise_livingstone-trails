import Ember from 'ember';

export default Ember.Mixin.create({
  formFeedback: {
    generalError: 'Ooops, sorry! Something went wrong. Please try again later...',
    success: 'Thank You! Your message was sent successfully',
    fillOutFields: 'Please fill the required fields'
  } 
  
});
