'use strict';

define("emb-lib-finder/tests/acceptance/browsing-authors-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | browsing authors', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /authors', async function (assert) {
      await (0, _testHelpers.visit)('/authors');
      assert.equal((0, _testHelpers.currentURL)(), '/authors');
    });
  });
});
define("emb-lib-finder/tests/acceptance/browsing-books-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | browsing books', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /browsing books', async function (assert) {
      await (0, _testHelpers.visit)('/books');
      assert.equal((0, _testHelpers.currentURL)(), '/books');
    });
  });
});
define("emb-lib-finder/tests/acceptance/browsing-libraries-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | browsing libraries', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /libraries', async function (assert) {
      await (0, _testHelpers.visit)('/libraries/show');
      assert.equal((0, _testHelpers.currentURL)(), '/libraries/show');
    });
  });
});
define("emb-lib-finder/tests/acceptance/request-invoice-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | request invoice', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting application page and filling in form', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/');
      assert.dom('input[name="email_address"').exists();
      assert.dom('button').exists();
      let button = this.element.querySelector('button');
      await (0, _testHelpers.fillIn)('input[name="email_address"', 'test@testing.com');
      assert.deepEqual(button.disabled, false);
      await (0, _testHelpers.click)(button);
      let input = this.element.querySelector('input[name="email_address"');
      assert.deepEqual(input.getAttribute('value'), null);
    });
  });
});
define("emb-lib-finder/tests/acceptance/visiting-about-page-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Acceptance | visiting about page', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);
    (0, _qunit.test)('visiting /about page', async function (assert) {
      await (0, _testHelpers.visit)('/about');
      assert.equal((0, _testHelpers.currentURL)(), '/about');
      assert.dom('div.title').exists();
      assert.dom('p').exists();
    });
  });
});
define("emb-lib-finder/tests/integration/components/alert-test", ["qunit", "@ember/test-helpers", "ember-qunit"], function (_qunit, _testHelpers, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Integration | Component | alert', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Alert @color="red"> Alert message </Alert>
      */
      {
        "id": "LezIc+Mg",
        "block": "{\"symbols\":[],\"statements\":[[8,\"alert\",[],[[\"@color\"],[\"red\"]],[[\"default\"],[{\"statements\":[[2,\" Alert message \"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'Alert message');
      assert.dom('div[role="alert"]').exists();
      assert.dom('div[role="alert"]').hasClass('bg-red-300');
    });
  });
});
define("emb-lib-finder/tests/integration/components/contact-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | contact-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders component and checks if button is enabled when input is given', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ContactForm />
      */
      {
        "id": "AY1yg2Gi",
        "block": "{\"symbols\":[],\"statements\":[[8,\"contact-form\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim().replace(/\s\s+/g, ' '), 'Let us call you! Send us a message. We will try to answer as soon as possible. Submit');
      assert.dom(this.element.querySelector('input')).exists();
      assert.dom(this.element.querySelector('textarea')).exists();
      assert.dom(this.element.querySelector('button')).exists();
      assert.deepEqual(this.element.querySelector('button').disabled, true);
      await (0, _testHelpers.fillIn)(this.element.querySelector('input'), 'test@test.com');
      await (0, _testHelpers.fillIn)(this.element.querySelector('textarea'), 'Test message');
      assert.deepEqual(this.element.querySelector('button').disabled, false);
    });
  });
});
define("emb-lib-finder/tests/integration/components/footer-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | footer', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders and shows icons', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Footer />
      */
      {
        "id": "ve7r3Hdc",
        "block": "{\"symbols\":[],\"statements\":[[8,\"footer\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
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
});
define("emb-lib-finder/tests/integration/components/form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Form />
      */
      {
        "id": "OIeNJeGq",
        "block": "{\"symbols\":[],\"statements\":[[8,\"form\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Form>
              template block text
            </Form>
          
      */
      {
        "id": "SS6JJfvO",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"form\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb-lib-finder/tests/integration/components/hero-block-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | hero-block', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders a hero block on loading page', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <HeroBlock />
      */
      {
        "id": "jJyRRj/M",
        "block": "{\"symbols\":[],\"statements\":[[8,\"hero-block\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim().replace(/\s\s+/g, ' '), `Library finder app Powered by Ember & TailwindCSS Get your registration number by inputting your email below. Submit`);
      assert.dom(this.element.querySelector('input[name="email_address"]')).exists();
      assert.dom(this.element.querySelector('button')).exists();
      let button = this.element.querySelector('button');
      assert.strictEqual(button.disabled, true);
      assert.equal(button.textContent, 'Submit');
    });
    (0, _qunit.test)('it enables button when correct input is filled in', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <HeroBlock />
      */
      {
        "id": "jJyRRj/M",
        "block": "{\"symbols\":[],\"statements\":[[8,\"hero-block\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      await (0, _testHelpers.fillIn)('input', 'test@testing.com');
      assert.deepEqual(this.element.querySelector('button').disabled, false);
    });
  });
});
define("emb-lib-finder/tests/integration/components/main-navigation-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | main-navigation', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
          <MainNavigation/>
          
      */
      {
        "id": "OaaQretC",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n    \"],[8,\"main-navigation\",[],[[],[]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim().replace(/\s\s+/g, ' '), 'Contact About Libraries Authors Buy books Cart Admin ▾ Invitations Messages Invoices Add Book');
    });
  });
});
define("emb-lib-finder/tests/integration/components/table-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | table', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Table />
      */
      {
        "id": "MHFrzCCV",
        "block": "{\"symbols\":[],\"statements\":[[8,\"table\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Table>
              template block text
            </Table>
          
      */
      {
        "id": "EaLbooPA",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"table\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb-lib-finder/tests/integration/components/user-info-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | user-info-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('Order form is rendered and button is not disabled after form is filled', async function (assert) {
      this.set('firstName', 'name');
      this.set('lastName', 'lastName');
      this.set('email', 'email@adress.com');
      this.set('street', 'test str');
      this.set('town', 'test town');
      this.set('orderItems', () => {
        'Items ordered';
      });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
              <UserInfoForm 
              @firstName={{this.firstName}}
              @lastName={{this.lastName}}
              @email={{this.email}}
              @street={{this.street}}
              @town={{this.town}}
              @isDisabled={{this.isDisabled}}
              @orderItems={{this.orderItems}}
            />
          
      */
      {
        "id": "R2QgIRIx",
        "block": "{\"symbols\":[],\"statements\":[[2,\"\\n        \"],[8,\"user-info-form\",[],[[\"@firstName\",\"@lastName\",\"@email\",\"@street\",\"@town\",\"@isDisabled\",\"@orderItems\"],[[32,0,[\"firstName\"]],[32,0,[\"lastName\"]],[32,0,[\"email\"]],[32,0,[\"street\"]],[32,0,[\"town\"]],[32,0,[\"isDisabled\"]],[32,0,[\"orderItems\"]]]],null],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim().replace(/\s\s+/g, ' '), 'Thank you for your purchase, please fill in your information to continue Firstname Lastname E-mail Street Town Order');
      assert.dom('.order-button').isNotDisabled();
    });
  });
});
define("emb-lib-finder/tests/integration/helpers/formatter-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | formatter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it parses input to the HTML unorderd list', async function (assert) {
      this.set('inputValue', '{"id":"BTMrbQqb0j3Wxw1Tz7Uq","name":"Children Stories","authorName":"Hans Christian Andersen","price":7,"amount":1,"totalPrice":7}');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{formatter inputValue}}
      */
      {
        "id": "mn0IvZmD",
        "block": "{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[35,0]],null]]],\"hasEval\":false,\"upvars\":[\"inputValue\",\"formatter\"]}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), '<ul class=\"p-4  text-left \"><li class=\"border-b-2 border-gray-100\">id:<span class=\"pl-8 font-bold\">BTMrbQqb0j3Wxw1Tz7Uq</span></li><li class=\"border-b-2 border-gray-100\">name:<span class=\"pl-8 font-bold\">Children Stories</span></li><li class=\"border-b-2 border-gray-100\">authorName:<span class=\"pl-8 font-bold\">Hans Christian Andersen</span></li><li class=\"border-b-2 border-gray-100\">price:<span class=\"pl-8 font-bold\">7</span></li><li class=\"border-b-2 border-gray-100\">amount:<span class=\"pl-8 font-bold\">1</span></li><li class=\"border-b-2 border-gray-100\">totalPrice:<span class=\"pl-8 font-bold\">7</span></li></ul>');
    });
  });
});
define("emb-lib-finder/tests/test-helper", ["emb-lib-finder/app", "emb-lib-finder/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("emb-lib-finder/tests/unit/routes/about-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | about', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:about');
      assert.ok(route);
    });
  });
});
define("emb-lib-finder/tests/unit/routes/contact-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact');
      assert.ok(route);
    });
  });
});
define('emb-lib-finder/config/environment', [], function() {
  var prefix = 'emb-lib-finder';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('emb-lib-finder/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
