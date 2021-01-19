import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class BookController extends Controller {
  @service shop;
  @service store; 

  @tracked bookName = '';

  get books(){
    if (this.bookName.length > 0){
      return this.store.peekAll('book').filter( item => item.name.toLowerCase().includes(this.bookName.toLowerCase()) );
    } else {
      return this.store.findAll('book');
    }
  }

  @action 
  buyBook(book){
    this.shop.addToCart(book);
    book.booksBought++;
  }

  toggleBuyingBook(book){
    book.addingBook = !book.addingBook;
  }
  
}