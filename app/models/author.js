import Model, { attr, hasMany } from '@ember-data/model';
import { tracked } from '@glimmer/tracking'
export default class AuthorModel extends Model {
  @attr('string') name;
  
  @hasMany('book') books;

  @tracked isEditing = false;
}