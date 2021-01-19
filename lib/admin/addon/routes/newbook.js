import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default class AdminNewbookRoute extends Route {
  @service store; 
  
  model(){  
    return hash({ 
      authors: this.store.findAll('author'),
      libraries: this.store.findAll('library')
    });
  }
}
