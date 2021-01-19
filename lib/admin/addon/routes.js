import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // Define your engine's route map here
  this.route('invitations');
  this.route('messages');
  this.route('newbook');
  this.route('invoices')
});
