import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import normalize from '../utils/cartnormalizer';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ShopController extends Controller {
  // Book shop
  @service shop;
  @service store;


  get isEmpty(){
    return this.cartContents.length > 0;
  }

  get cartContents(){
    let cartList = normalize(this.shop.cart);
    let output = cartList.map(item => {
      return {
        id: item.id,
        name: item.name,
        authorName: item.authorName,
        price: item.price,
        amount: item.amount,
        totalPrice: item.price * item.amount
      }
    });
    return output;
  }


  // User input form
  @tracked firstName = '';
  @tracked lastName = ''; 
  @tracked email = '';
  @tracked street = '';
  @tracked town = '';

  get isDisabled(){
    return !(this.firstName && this.lastName && this.email && this.street && this.town)
  }

  @action
  async orderItems(event){
    event.preventDefault();

    let userInfo = JSON.stringify({
      name: `${this.firstName} ${this.lastName}`, 
      email: this.email, 
      adress: `${this.street}, ${this.town}`,
    });

    let userCart = this.cartContents.map(obj => {
      return JSON.stringify(obj);
    });

    await this.shop.orderItems(userInfo, userCart);
      this.firstName = '';
      this.lastName = ''; 
      this.email = '';
      this.street = '';
      this.town = '';
   }

 
}