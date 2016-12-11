import Ember from 'ember';
import config from '../../config/environment';
import mixinContactFormText from '../../mixins/c-contact-form-text';

export default Ember.Component.extend(mixinContactFormText,{
  name:'',
  email:'',
  subject:'',
  message:'',
  sendFormFailed: false,
  showError: false,
  showSuccess: false,
  showMissingFields: Ember.computed('sendFormFailed','name','email','subject','message',function(){
    //RESET ALL OTHER MESSAGES
    
    if(this.get('sendFormFailed') && this.get('hasMissingFields')  === true){
      this.set('showError',false);
      this.set('showSuccess',false);
      return true;
    }
      
    return false;
  }),
  hasMissingFields: Ember.computed('name','email','subject','message',function(){
    let fieldsMissed = !this.get('name') || !this.get('email') || !this.get('subject') || !this.get('message');
    
    return fieldsMissed;
  }),
  ajax: Ember.inject.service(),
  actions: {
    resetForm(){
      this.set('sendFormFailed', false);
      this.set('showError', false);
      this.set('name', '');
      this.set('email', '');
      this.set('subject', '');
      this.set('message', '');
    },
    submitContactForm(){
      if(this.get('hasMissingFields') === true){
        //SHOW MISSING FIELDS ERROR
        this.set('sendFormFailed', true);
      } else {
        //SEND FORM        
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
          this.send('resetForm');
          this.set('showSuccess', true);
        }).catch(error => {
          this.set('sendFormFailed', true);
          this.set('showError', true);
        });  
      }
    }
  }
  
});
