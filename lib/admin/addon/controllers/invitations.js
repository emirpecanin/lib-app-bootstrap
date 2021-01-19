import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminInvitationsController extends Controller {
  @action
  removeInvitation(invitation){
   invitation.destroyRecord();
  }
}