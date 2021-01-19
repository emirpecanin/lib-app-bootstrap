import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // Define your engine's route map here
  this.route('show');
  this.route('new');
  this.route('edit', { path: '/:library_id' });
  this.route('has', {
    path: '/has/:library_id'
  });
});
