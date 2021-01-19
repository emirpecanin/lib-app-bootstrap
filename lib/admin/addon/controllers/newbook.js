import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewBookController extends Controller {
  @service store;

  // Authors 
  @tracked authorName = '';

  get isNameValid(){
    return !(this.authorName.length > 3);
  }

  @action
  saveAuthor(){
    this.store
      .createRecord('author', { name: this.authorName })
      .save()
      .then( () => { this.authorName = ''; })
  }

  // Books
  @tracked bookName = '';
  @tracked bookIsdn = '';
  @tracked author_id = '';
  @tracked library_id= '';
  @tracked bookPrice = 0;
  @tracked bookAmount = 1;

  get canAddBook(){
    return (this.authors.length && this.library.length);
  }

  get canSaveBook(){
    return !(this.bookName && this.bookIsdn.match(/^-?\d+\.?\d*$/m) && this.author_id.length && this.library_id.length && this.bookPrice>0)
  }

  get library(){
    return this.model.libraries;
  }

  get authors(){
    return this.model.authors;
  }

  @action
  saveBook(){
    let author = this.store.peekRecord('author',this.author_id);
    let library = this.store.peekRecord('library', this.library_id);

    this.store.createRecord('book', {
      name: this.bookName,
      ISDN: this.bookIsdn,
      price: this.bookPrice,
      amount: this.bookAmount,
      author,
      library
    })
    .save()
    .then( () => author.save() )
    .then( () => library.save() )
    .then(() => {
      this.bookName = '';
      this.bookIsdn = '';
      this.bookPrice = 0;
      this.bookAmount = 0;
      this.author_id = '';
      this.library_id= '';
    })
    .then( () => {
      document.querySelector('.book-form').reset();
    });
  }

  @action
  getSelection(event){
    if(event.target.name === 'author') {
      this.author_id = event.target.value;
    }
    if (event.target.name === 'library') {
      this.library_id = event.target.value;
    }
  }
}