import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | request invoice', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting application page and filling in form', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');

    assert.dom('input[name="email_address"').exists();
    assert.dom('button').exists();

    let button = this.element.querySelector('button');
    await fillIn('input[name="email_address"', 'test@testing.com');
    assert.deepEqual(button.disabled, false);

    await click(button);
    let input = this.element.querySelector('input[name="email_address"');
    assert.deepEqual(input.getAttribute('value'), null);
  });
});
