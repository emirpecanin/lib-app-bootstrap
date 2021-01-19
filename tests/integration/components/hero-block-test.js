import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | hero-block', function(hooks) {
  setupRenderingTest(hooks);
  
  
  test('it renders a hero block on loading page', async function(assert) {
    await render(hbs`<HeroBlock />`);
    
    assert.equal(this.element.textContent.trim().replace(/\s\s+/g,' '), `Library finder app Powered by Ember & TailwindCSS Get your registration number by inputting your email below. Submit`);
    
    assert.dom(this.element.querySelector('input[name="email_address"]')).exists();
    assert.dom(this.element.querySelector('button')).exists();
    
    let button = this.element.querySelector('button');
    assert.strictEqual(button.disabled, true);
    assert.equal(button.textContent, 'Submit');
  });

  test('it enables button when correct input is filled in', async function(assert){
    await render(hbs`<HeroBlock />`);

    await fillIn('input', 'test@testing.com');
    assert.deepEqual(this.element.querySelector('button').disabled, false);
  });
});
