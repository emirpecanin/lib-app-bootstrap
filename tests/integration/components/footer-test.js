import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders and shows icons', async function(assert) {

    await render(hbs`<Footer />`);

    assert.equal(this.element.textContent.trim(), '© 2020 Me, all rights reserved!');
    
    assert.dom(this.element.querySelector('a.twitter-icon')).exists();
    assert.deepEqual(this.element.querySelector('.twitter-icon').getAttribute('href'), 'http://twitter.com');

    assert.dom(this.element.querySelector('a.linkedin-icon')).exists();
    assert.deepEqual(this.element.querySelector('.linkedin-icon').getAttribute('href'), 'http://linkedin.com');

    assert.dom(this.element.querySelector('a.github-icon')).exists();
    assert.deepEqual(this.element.querySelector('.github-icon').getAttribute('href'), 'http://github.com');

    assert.dom(this.element.querySelector('a.facebook-icon')).exists();
    assert.deepEqual(this.element.querySelector('.facebook-icon').getAttribute('href'), 'http://facebook.com');

    
  });
});
