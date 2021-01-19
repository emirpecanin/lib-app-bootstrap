import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | user-info-form', function(hooks) {
  setupRenderingTest(hooks);

  test('Order form is rendered and button is not disabled after form is filled', async function(assert) {

    this.set('firstName', 'name');
    this.set('lastName', 'lastName');
    this.set('email', 'email@adress.com');
    this.set('street', 'test str');
    this.set('town', 'test town');
    this.set('orderItems', ()=>{'Items ordered'})

    await render(hbs`
        <UserInfoForm 
        @firstName={{this.firstName}}
        @lastName={{this.lastName}}
        @email={{this.email}}
        @street={{this.street}}
        @town={{this.town}}
        @isDisabled={{this.isDisabled}}
        @orderItems={{this.orderItems}}
      />
    `);
    
    assert.equal(this.element.textContent.trim().replace(/\s\s+/g, ' '), 'Thank you for your purchase, please fill in your information to continue Firstname Lastname E-mail Street Town Order');
    assert.dom('.order-button').isNotDisabled();
    
  });
});
