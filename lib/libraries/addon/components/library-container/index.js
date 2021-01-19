import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class LibraryContainerComponent extends Component {
  @service store;

  @action
  async deleteLibrary(library){
    let confirmation = confirm('Are you sure you want to delete a gallery? Removing a library will remove all books library had.');
    if (confirmation) {
      let libId = library.id;
      this.store.findAll('book',{ filter: { library: libId }}).then(
        (books)=> {
          books.forEach( book => book.destroyRecord() );
        }
      );
      library.destroyRecord();
    }
  }
}
