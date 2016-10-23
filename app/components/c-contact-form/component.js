import Ember from 'ember';

export default Ember.Component.extend({
  name:'',
  email:'',
  subject:'',
  message:'',
  
  actions: {
    submitContactForm(){
      let formData = {
        name:     this.get('name'),
        email:    this.get('email'),
        subject:  this.get('subject'),
        message:  this.get('message'),
      };
      
      console.dir(formData);

    }
  }
  
});



/*
target:

name:Jonas Büchel
email:jonas.buechel@gmail.com
subject:huballa huballa
message:mussma dein form testen ;-)

*/