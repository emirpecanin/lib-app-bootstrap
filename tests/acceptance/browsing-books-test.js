import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | browsing books', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /browsing books', async function(assert) {
    await visit('/books');

    assert.equal(currentURL(), '/books');
  });
});
