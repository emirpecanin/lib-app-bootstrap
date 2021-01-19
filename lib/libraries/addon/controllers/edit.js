import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LibrariesEditController extends Controller {

  @action
  saveChanges(){
    let library = this.model;
    library.save().then(() => {
      this.transitionToRoute('show');
    });
  }
}