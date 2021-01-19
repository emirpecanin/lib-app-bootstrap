import Service from '@ember/service';
import { A } from '@ember/array';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ShopService extends Service {
  @service store;
  @service router;

  cart = A([]);
 
  get cartItems(){
    return this.cart;
  }

  @action
  addToCart({ id, name, price, author }){
    let authorName = author.get('name');
    this.cart.pushObject({id, name, price, authorName});
  }

  @action
  orderItems(userInfo, userCart){
    this.store.createRecord('invoice',{
      userInfo,
      items: userCart,
    })
    .save()
    .then( () => {
      this.cart.clear();
    })
    .then( () => {
      this.router.transitionTo('books');
    });
  }
  
}
