import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Component.extend({
  name:'',
  email:'',
  subject:'',
  message:'',
  showError: false,
  showSuccess: false,
  ajax: Ember.inject.service(),
  actions: {
    submitContactForm(){
      let formData = {
        name:     this.get('name'),
        email:    this.get('email'),
        subject:  this.get('subject'),
        message:  this.get('message'),
      };
      
      const ajaxService = this.get('ajax');
      const requestEndpoint = config.APP.contactForm.endpoint;
            
      return ajaxService.request(requestEndpoint, {
        method: 'POST',
        headers: {
          accept: 'text/html'
        },
        data: formData
      }).then(response => {
        this.set('showSuccess', true);
      }).catch(error => {
        this.set('showError', true);
        console.log(error);
      });

    }
  }
  
});
