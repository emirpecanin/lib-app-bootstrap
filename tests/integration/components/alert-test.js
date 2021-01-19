import { module, test } from 'qunit';
import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | alert', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<Alert @color="red"> Alert message </Alert>`);
    assert.equal(this.element.textContent.trim(), 'Alert message');
    assert.dom('div[role="alert"]').exists();
    assert.dom('div[role="alert"]').hasClass('bg-red-300')
  });
},);
