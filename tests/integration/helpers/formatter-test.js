import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | formatter', function(hooks) {
  setupRenderingTest(hooks);

  test('it parses input to the HTML unorderd list', async function(assert) {
    this.set('inputValue', '{"id":"BTMrbQqb0j3Wxw1Tz7Uq","name":"Children Stories","authorName":"Hans Christian Andersen","price":7,"amount":1,"totalPrice":7}');

    await render(hbs`{{formatter inputValue}}`);

    assert.equal(this.element.textContent.trim(), '<ul class=\"p-4  text-left \"><li class=\"border-b-2 border-gray-100\">id:<span class=\"pl-8 font-bold\">BTMrbQqb0j3Wxw1Tz7Uq</span></li><li class=\"border-b-2 border-gray-100\">name:<span class=\"pl-8 font-bold\">Children Stories</span></li><li class=\"border-b-2 border-gray-100\">authorName:<span class=\"pl-8 font-bold\">Hans Christian Andersen</span></li><li class=\"border-b-2 border-gray-100\">price:<span class=\"pl-8 font-bold\">7</span></li><li class=\"border-b-2 border-gray-100\">amount:<span class=\"pl-8 font-bold\">1</span></li><li class=\"border-b-2 border-gray-100\">totalPrice:<span class=\"pl-8 font-bold\">7</span></li></ul>');
  });
});
