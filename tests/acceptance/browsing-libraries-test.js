import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | browsing libraries', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /libraries', async function(assert) {
    await visit('/libraries/show');
    assert.equal(currentURL(), '/libraries/show');
    
  });
});
