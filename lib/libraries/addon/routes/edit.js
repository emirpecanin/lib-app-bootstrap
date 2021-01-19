import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class LibrariesEditRoute extends Route {
  @action
  willTransition(transition){
    let library = this.controller.model;
    if(library.hasDirtyAttributes){
      const confirmation = confirm('Changes to your library are not saved. Are you sure you want to navigate away from this page?');
        if(confirmation){
          library.rollbackAttributes();
        }else {
          transition.abort();
        }
    }
  }
}
