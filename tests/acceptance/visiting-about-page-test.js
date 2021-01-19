import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | visiting about page', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /about page', async function(assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('div.title').exists();
    assert.dom('p').exists();
  });
});
