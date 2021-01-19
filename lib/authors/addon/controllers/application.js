import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorsController extends Controller {
  
  @action
  removeAuthor(author){
    author.destroyRecord();
  }

  @action
  toggleEditing(author){
    author.isEditing = !author.isEditing;
  }

  @action
  saveChanges(author){
    author.save().then(
      () => {
        this.toggleEditing(author);
      }
    );  
  }

  @action
  rejectChanges(author){
    if (author.hasDirtyAttributes) {
      author.rollbackAttributes();
    }
    this.toggleEditing(author);
  }
}
