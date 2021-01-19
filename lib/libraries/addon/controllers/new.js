import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LibrariesNewController extends Controller {
  @service store;

  @tracked name='';
  @tracked address='';
  @tracked phoneNumber='';
  @tracked additionalInfo='';

  get isDisabled(){
    return !(this.name && this.address && this.phoneNumber);
  }

  @action
  addLibrary(){
    this.store.createRecord('library', {
      name: this.name,
      address: this.address,
      phoneNumber: this.phoneNumber,
      additional: this.additionalInfo
    }).save().then(() => {
      this.name = '';
      this.address='';
      this.phoneNumber='';
      this.additionalInfo='';
      this.transitionToRoute('show');
    })
  }

}