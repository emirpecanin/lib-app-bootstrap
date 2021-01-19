import Model, { attr } from '@ember-data/model';

export default class MessageModel extends Model{
  @attr('string') email;
  @attr('string') dateSent;
  @attr('string') message;
}