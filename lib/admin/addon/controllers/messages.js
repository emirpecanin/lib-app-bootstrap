import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service} from '@ember/service';

export default class MessagesController extends Controller {
  @service store;
  
  @action
  purgeMessages(){
    
      this.store.findAll('message').then( messages => {
            messages.forEach(message => message.destroyRecord())
          } 
        )
    
  }
}