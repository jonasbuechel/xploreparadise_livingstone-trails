import Ember from 'ember';

export default Ember.Mixin.create({
  formFeedback: {
    generalError: 'Ooops, sorry! Something went wrong. Please try again later...',
    success: 'Thank You! Your email has been delivered',
    fillOutFields: 'Please fill out all fields'
  } 
  
});
