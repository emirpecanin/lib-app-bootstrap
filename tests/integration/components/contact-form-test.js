import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | contact-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders component and checks if button is enabled when input is given', async function(assert) {
    await render(hbs`<ContactForm />`);
    assert.equal(this.element.textContent.trim().replace(/\s\s+/g, ' '), 'Let us call you! Send us a message. We will try to answer as soon as possible. Submit');

    assert.dom(this.element.querySelector('input')).exists();
    assert.dom(this.element.querySelector('textarea')).exists();
    assert.dom(this.element.querySelector('button')).exists();
    
    assert.deepEqual(this.element.querySelector('button').disabled, true);
    
    await fillIn(this.element.querySelector('input'), 'test@test.com');
    await fillIn(this.element.querySelector('textarea'), 'Test message');
    assert.deepEqual(this.element.querySelector('button').disabled, false);
    
  });
});
