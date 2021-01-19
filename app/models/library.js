import Model, { attr, hasMany } from '@ember-data/model';

export default class LibraryModel extends Model{
  @attr('string') name;
  @attr('string') address;
  @attr('string') phoneNumber;
  @attr('string') additional;

  @hasMany('book') books;
}