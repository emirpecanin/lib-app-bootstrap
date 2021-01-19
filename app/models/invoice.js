import Model, { attr } from '@ember-data/model';
export default class InvoiceModel extends Model{
  @attr('string') userInfo;
  @attr('string') items;

 
} 