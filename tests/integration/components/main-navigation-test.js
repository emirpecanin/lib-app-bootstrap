import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | main-navigation', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
    <MainNavigation/>
    `);
    assert.equal(this.element.textContent.trim().replace(/\s\s+/g, ' '), 'Contact About Libraries Authors Buy books Cart Admin ▾ Invitations Messages Invoices Add Book');
  });
});
