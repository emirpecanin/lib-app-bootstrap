import Model, { attr, belongsTo } from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class BookModel extends Model{
  @attr('string') name;
  @attr('string') ISDN;
  @attr('number') price;
  @attr('number') amount;


  @belongsTo('author') author;
  @belongsTo('library') library;

  @tracked addingBook = false;
  @tracked booksBought = 0;

  get notAvailable(){
    return !(this.amount - this.booksBought);
  }
}