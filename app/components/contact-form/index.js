import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ContactFormComponent extends Component {
  @service store; 
  
  @tracked email = '';
  @tracked message = '';
  @tracked alertMessage = '';
 

  get isValid() {
    return this.email.match(/^.+@.+\..+$/) && this.message.length > 5;
  }

  get isDisabled() {
    return !this.isValid;
  }

  get date(){
    return Date.now();
  }
  
  @action
  sendMessage(){
    this.store.createRecord('message', {
      email: this.email,
      dateSent: this.date,
      message: this.message,
    })
    .save()
    .then(() => {
      this.email = '';
      this.message ='';
      this.alertMessage = 'Your email has been succcessfully sent.';
    })
  }
}
