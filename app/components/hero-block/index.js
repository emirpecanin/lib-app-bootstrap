import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HeroBlockComponent extends Component {
  @service store;

  @tracked email='';
  @tracked alertMessage = '';
  @tracked deleteMesage = '';

  get isValid(){
    return this.email.match(/^.+@.+\..+$/);
  }
  
  get isDisabled(){
    return !this.isValid;
  }


  @action
  submitInvitation(){
    this.store
    .createRecord('invitation', { email: this.email })
    .save()
    .then(() => {
      this.email = '';
      this.alertMessage = `Your email adress ${this.email} has been successfully added to the invitation list`;
    });
  }

}
