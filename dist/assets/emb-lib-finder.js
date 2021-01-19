'use strict';



;define("emb-lib-finder/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("emb-lib-finder/adapters/application", ["exports", "emberfire/adapters/firestore"], function (_exports, _firestore) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _firestore.default.extend({// Uncomment the following lines to enable offline persistence and multi-tab support
    // enablePersistence: true,
    // persistenceSettings: { synchronizeTabs: true }
  });

  _exports.default = _default;
});
;define("emb-lib-finder/app", ["exports", "ember-resolver", "ember-load-initializers", "emb-lib-finder/config/environment"], function (_exports, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class App extends Ember.Application {
    constructor() {
      super(...arguments);

      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);

      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);

      _defineProperty(this, "Resolver", _emberResolver.default);

      this.engines = {
        libraries: {
          dependencies: {
            services: ['store']
          }
        },
        authors: {
          dependencies: {
            services: ['store']
          }
        },
        books: {
          dependencies: {
            services: ['store', 'shop']
          }
        },
        admin: {
          dependencies: {
            services: ['store']
          }
        },
        shop: {
          dependencies: {
            services: ['store', 'shop']
          }
        }
      };
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("emb-lib-finder/authenticators/firebase", ["exports", "emberfire/authenticators/firebase"], function (_exports, _firebase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _firebase.default;
    }
  });
});
;define("emb-lib-finder/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("emb-lib-finder/components/-dynamic-element-alt", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("emb-lib-finder/components/-dynamic-element", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // avoiding reexport directly here because in some circumstances (ember-engines
  // for example) a simple reexport is transformed to `define.alias`,
  // unfortunately at the moment (ember-source@3.13) there is no _actual_
  // `@ember/component` module to alias so this causes issues
  //
  // tldr; we can replace this with a simple reexport when we can rely on Ember
  // actually providing a `@ember/component` module
  var _default = Ember.Component.extend();

  _exports.default = _default;
});
;define("emb-lib-finder/components/alert", ["exports", "shared-components/components/alert"], function (_exports, _alert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _alert.default;
    }
  });
});
;define("emb-lib-finder/components/book-form", ["exports", "admin/components/book-form"], function (_exports, _bookForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bookForm.default;
    }
  });
});
;define("emb-lib-finder/components/bs-accordion", ["exports", "ember-bootstrap/components/bs-accordion"], function (_exports, _bsAccordion) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAccordion.default;
    }
  });
});
;define("emb-lib-finder/components/bs-accordion/item", ["exports", "ember-bootstrap/components/bs-accordion/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("emb-lib-finder/components/bs-accordion/item/body", ["exports", "ember-bootstrap/components/bs-accordion/item/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("emb-lib-finder/components/bs-accordion/item/title", ["exports", "ember-bootstrap/components/bs-accordion/item/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("emb-lib-finder/components/bs-alert", ["exports", "ember-bootstrap/components/bs-alert"], function (_exports, _bsAlert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsAlert.default;
    }
  });
});
;define("emb-lib-finder/components/bs-button-group", ["exports", "ember-bootstrap/components/bs-button-group"], function (_exports, _bsButtonGroup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.default;
    }
  });
});
;define("emb-lib-finder/components/bs-button-group/button", ["exports", "ember-bootstrap/components/bs-button-group/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("emb-lib-finder/components/bs-button", ["exports", "ember-bootstrap/components/bs-button"], function (_exports, _bsButton) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsButton.default;
    }
  });
});
;define("emb-lib-finder/components/bs-carousel", ["exports", "ember-bootstrap/components/bs-carousel"], function (_exports, _bsCarousel) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCarousel.default;
    }
  });
});
;define("emb-lib-finder/components/bs-carousel/slide", ["exports", "ember-bootstrap/components/bs-carousel/slide"], function (_exports, _slide) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _slide.default;
    }
  });
});
;define("emb-lib-finder/components/bs-collapse", ["exports", "ember-bootstrap/components/bs-collapse"], function (_exports, _bsCollapse) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsCollapse.default;
    }
  });
});
;define("emb-lib-finder/components/bs-dropdown", ["exports", "ember-bootstrap/components/bs-dropdown"], function (_exports, _bsDropdown) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDropdown.default;
    }
  });
});
;define("emb-lib-finder/components/bs-dropdown/button", ["exports", "ember-bootstrap/components/bs-dropdown/button"], function (_exports, _button) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _button.default;
    }
  });
});
;define("emb-lib-finder/components/bs-dropdown/menu", ["exports", "ember-bootstrap/components/bs-dropdown/menu"], function (_exports, _menu) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _menu.default;
    }
  });
});
;define("emb-lib-finder/components/bs-dropdown/menu/divider", ["exports", "ember-bootstrap/components/bs-dropdown/menu/divider"], function (_exports, _divider) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _divider.default;
    }
  });
});
;define("emb-lib-finder/components/bs-dropdown/menu/item", ["exports", "ember-bootstrap/components/bs-dropdown/menu/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("emb-lib-finder/components/bs-dropdown/menu/link-to", ["exports", "ember-bootstrap/components/bs-dropdown/menu/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("emb-lib-finder/components/bs-dropdown/toggle", ["exports", "ember-bootstrap/components/bs-dropdown/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form", ["exports", "ember-bootstrap/components/bs-form"], function (_exports, _bsForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsForm.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element", ["exports", "ember-bootstrap/components/bs-form/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/control", ["exports", "ember-bootstrap/components/bs-form/element/control"], function (_exports, _control) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _control.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/control/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/control/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/control/input", ["exports", "ember-bootstrap/components/bs-form/element/control/input"], function (_exports, _input) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _input.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/control/radio", ["exports", "ember-bootstrap/components/bs-form/element/control/radio"], function (_exports, _radio) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _radio.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/control/textarea", ["exports", "ember-bootstrap/components/bs-form/element/control/textarea"], function (_exports, _textarea) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _textarea.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/errors", ["exports", "ember-bootstrap/components/bs-form/element/errors"], function (_exports, _errors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _errors.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/feedback-icon", ["exports", "ember-bootstrap/components/bs-form/element/feedback-icon"], function (_exports, _feedbackIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _feedbackIcon.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/help-text", ["exports", "ember-bootstrap/components/bs-form/element/help-text"], function (_exports, _helpText) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _helpText.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/label", ["exports", "ember-bootstrap/components/bs-form/element/label"], function (_exports, _label) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _label.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/layout/horizontal", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal"], function (_exports, _horizontal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _horizontal.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/layout/horizontal/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/layout/inline", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline"], function (_exports, _inline) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _inline.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/layout/inline/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/inline/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/layout/vertical", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical"], function (_exports, _vertical) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _vertical.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/layout/vertical/checkbox", ["exports", "ember-bootstrap/components/bs-form/element/layout/vertical/checkbox"], function (_exports, _checkbox) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _checkbox.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/element/legend", ["exports", "ember-bootstrap/components/bs-form/element/legend"], function (_exports, _legend) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _legend.default;
    }
  });
});
;define("emb-lib-finder/components/bs-form/group", ["exports", "ember-bootstrap/components/bs-form/group"], function (_exports, _group) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _group.default;
    }
  });
});
;define("emb-lib-finder/components/bs-modal-simple", ["exports", "ember-bootstrap/components/bs-modal-simple"], function (_exports, _bsModalSimple) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModalSimple.default;
    }
  });
});
;define("emb-lib-finder/components/bs-modal", ["exports", "ember-bootstrap/components/bs-modal"], function (_exports, _bsModal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsModal.default;
    }
  });
});
;define("emb-lib-finder/components/bs-modal/body", ["exports", "ember-bootstrap/components/bs-modal/body"], function (_exports, _body) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _body.default;
    }
  });
});
;define("emb-lib-finder/components/bs-modal/dialog", ["exports", "ember-bootstrap/components/bs-modal/dialog"], function (_exports, _dialog) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _dialog.default;
    }
  });
});
;define("emb-lib-finder/components/bs-modal/footer", ["exports", "ember-bootstrap/components/bs-modal/footer"], function (_exports, _footer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _footer.default;
    }
  });
});
;define("emb-lib-finder/components/bs-modal/header", ["exports", "ember-bootstrap/components/bs-modal/header"], function (_exports, _header) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _header.default;
    }
  });
});
;define("emb-lib-finder/components/bs-modal/header/close", ["exports", "ember-bootstrap/components/bs-modal/header/close"], function (_exports, _close) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _close.default;
    }
  });
});
;define("emb-lib-finder/components/bs-modal/header/title", ["exports", "ember-bootstrap/components/bs-modal/header/title"], function (_exports, _title) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _title.default;
    }
  });
});
;define("emb-lib-finder/components/bs-nav", ["exports", "ember-bootstrap/components/bs-nav"], function (_exports, _bsNav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNav.default;
    }
  });
});
;define("emb-lib-finder/components/bs-nav/item", ["exports", "ember-bootstrap/components/bs-nav/item"], function (_exports, _item) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _item.default;
    }
  });
});
;define("emb-lib-finder/components/bs-nav/link-to", ["exports", "ember-bootstrap/components/bs-nav/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("emb-lib-finder/components/bs-navbar", ["exports", "ember-bootstrap/components/bs-navbar"], function (_exports, _bsNavbar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNavbar.default;
    }
  });
});
;define("emb-lib-finder/components/bs-navbar/content", ["exports", "ember-bootstrap/components/bs-navbar/content"], function (_exports, _content) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
;define("emb-lib-finder/components/bs-navbar/link-to", ["exports", "ember-bootstrap/components/bs-navbar/link-to"], function (_exports, _linkTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkTo.default;
    }
  });
});
;define("emb-lib-finder/components/bs-navbar/nav", ["exports", "ember-bootstrap/components/bs-navbar/nav"], function (_exports, _nav) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _nav.default;
    }
  });
});
;define("emb-lib-finder/components/bs-navbar/toggle", ["exports", "ember-bootstrap/components/bs-navbar/toggle"], function (_exports, _toggle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _toggle.default;
    }
  });
});
;define("emb-lib-finder/components/bs-popover", ["exports", "ember-bootstrap/components/bs-popover"], function (_exports, _bsPopover) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsPopover.default;
    }
  });
});
;define("emb-lib-finder/components/bs-popover/element", ["exports", "ember-bootstrap/components/bs-popover/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("emb-lib-finder/components/bs-progress", ["exports", "ember-bootstrap/components/bs-progress"], function (_exports, _bsProgress) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsProgress.default;
    }
  });
});
;define("emb-lib-finder/components/bs-progress/bar", ["exports", "ember-bootstrap/components/bs-progress/bar"], function (_exports, _bar) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bar.default;
    }
  });
});
;define("emb-lib-finder/components/bs-tab", ["exports", "ember-bootstrap/components/bs-tab"], function (_exports, _bsTab) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTab.default;
    }
  });
});
;define("emb-lib-finder/components/bs-tab/pane", ["exports", "ember-bootstrap/components/bs-tab/pane"], function (_exports, _pane) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pane.default;
    }
  });
});
;define("emb-lib-finder/components/bs-tooltip", ["exports", "ember-bootstrap/components/bs-tooltip"], function (_exports, _bsTooltip) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTooltip.default;
    }
  });
});
;define("emb-lib-finder/components/bs-tooltip/element", ["exports", "ember-bootstrap/components/bs-tooltip/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("emb-lib-finder/components/contact-form/index", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <Form 
    @title="Let us call you!"
    @subtitle="Send us a message. We will try to answer as soon as possible">
    <Input 
      @value={{this.email}}
      type="email" 
      placeholder="Your Email" 
      class="form-control mb-2" 
    />
  
    <Textarea 
      @value={{this.message}}
      cols="10" 
      rows="3" 
      placeholder="Message needs to be 5 letters or more" 
      class="form-control mb-4"
      />
  
    <button 
      {{on 'click' this.sendMessage}}
      disabled={{this.isDisabled}}
      type="button" 
      class="btn btn-info w-100"
    >
      Submit
    </button>
  
    {{#if this.alertMessage}}
      <Alert @color="success">{{this.alertMessage}}</Alert>
    {{/if}}
  </Form>
  */
  {
    "id": "HxiFfC4z",
    "block": "{\"symbols\":[],\"statements\":[[8,\"form\",[],[[\"@title\",\"@subtitle\"],[\"Let us call you!\",\"Send us a message. We will try to answer as soon as possible\"]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[8,\"input\",[[24,\"placeholder\",\"Your Email\"],[24,0,\"form-control mb-2\"],[24,4,\"email\"]],[[\"@value\"],[[32,0,[\"email\"]]]],null],[2,\"\\n\\n  \"],[8,\"textarea\",[[24,\"cols\",\"10\"],[24,\"rows\",\"3\"],[24,\"placeholder\",\"Message needs to be 5 letters or more\"],[24,0,\"form-control mb-4\"]],[[\"@value\"],[[32,0,[\"message\"]]]],null],[2,\"\\n  \"],[11,\"button\"],[16,\"disabled\",[32,0,[\"isDisabled\"]]],[24,0,\"btn btn-info w-100\"],[24,4,\"button\"],[4,[38,0],[\"click\",[32,0,[\"sendMessage\"]]],null],[12],[2,\"\\n    Submit\\n  \"],[13],[2,\"\\n\\n\"],[6,[37,1],[[32,0,[\"alertMessage\"]]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"alert\",[],[[\"@color\"],[\"success\"]],[[\"default\"],[{\"statements\":[[1,[32,0,[\"alertMessage\"]]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"on\",\"if\"]}",
    "meta": {
      "moduleName": "emb-lib-finder/components/contact-form/index.hbs"
    }
  });

  let ContactFormComponent = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._action, (_class = (_temp = class ContactFormComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "email", _descriptor2, this);

      _initializerDefineProperty(this, "message", _descriptor3, this);

      _initializerDefineProperty(this, "alertMessage", _descriptor4, this);
    }

    get isValid() {
      return this.email.match(/^.+@.+\..+$/) && this.message.length > 5;
    }

    get isDisabled() {
      return !this.isValid;
    }

    get date() {
      return Date.now();
    }

    sendMessage() {
      this.store.createRecord('message', {
        email: this.email,
        dateSent: this.date,
        message: this.message
      }).save().then(() => {
        this.email = '';
        this.message = '';
        this.alertMessage = 'Your email has been succcessfully sent.';
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "email", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "message", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "alertMessage", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "sendMessage", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "sendMessage"), _class.prototype)), _class));
  _exports.default = ContactFormComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ContactFormComponent);
});
;define("emb-lib-finder/components/ember-popper-targeting-parent", ["exports", "ember-popper/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("emb-lib-finder/components/ember-popper", ["exports", "ember-popper/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("emb-lib-finder/components/fa-icon", ["exports", "@fortawesome/ember-fontawesome/components/fa-icon"], function (_exports, _faIcon) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _faIcon.default;
    }
  });
});
;define("emb-lib-finder/components/footer/index", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <footer class="footer mt-auto py-3 bg-dark text-white">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="mr-4">&copy; 2020 Me, all rights reserved!</div>
      <a class="twitter-icon mr-2 text-info" href="http://twitter.com">
        <FaIcon @icon="twitter-square" @prefix="fab" @size="2x"/>
      </a>
      <a class="linkedin-icon mr-2 text-info" href="http://linkedin.com">
        <FaIcon @icon="linkedin" @prefix="fab" @size="2x"/>
      </a>
      <a class="github-icon mr-2 text-info" href="http://github.com">
        <FaIcon @icon="github-square" @prefix="fab" @size="2x"/>
      </a>
      <a class="facebook-icon text-info" href="http://facebook.com">
        <FaIcon @icon="facebook-square" @prefix="fab" @size="2x"/>
      </a>
    </div>
  </footer>
  */
  {
    "id": "B1V2ld/E",
    "block": "{\"symbols\":[],\"statements\":[[10,\"footer\"],[14,0,\"footer mt-auto py-3 bg-dark text-white\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"container d-flex justify-content-center align-items-center\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"mr-4\"],[12],[2,\"© 2020 Me, all rights reserved!\"],[13],[2,\"\\n    \"],[10,\"a\"],[14,0,\"twitter-icon mr-2 text-info\"],[14,6,\"http://twitter.com\"],[12],[2,\"\\n      \"],[8,\"fa-icon\",[],[[\"@icon\",\"@prefix\",\"@size\"],[\"twitter-square\",\"fab\",\"2x\"]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"a\"],[14,0,\"linkedin-icon mr-2 text-info\"],[14,6,\"http://linkedin.com\"],[12],[2,\"\\n      \"],[8,\"fa-icon\",[],[[\"@icon\",\"@prefix\",\"@size\"],[\"linkedin\",\"fab\",\"2x\"]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"a\"],[14,0,\"github-icon mr-2 text-info\"],[14,6,\"http://github.com\"],[12],[2,\"\\n      \"],[8,\"fa-icon\",[],[[\"@icon\",\"@prefix\",\"@size\"],[\"github-square\",\"fab\",\"2x\"]],null],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"a\"],[14,0,\"facebook-icon text-info\"],[14,6,\"http://facebook.com\"],[12],[2,\"\\n      \"],[8,\"fa-icon\",[],[[\"@icon\",\"@prefix\",\"@size\"],[\"facebook-square\",\"fab\",\"2x\"]],null],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "emb-lib-finder/components/footer/index.hbs"
    }
  });

  class FooterComponent extends _component.default {}

  _exports.default = FooterComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, FooterComponent);
});
;define("emb-lib-finder/components/form", ["exports", "shared-components/components/form"], function (_exports, _form) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _form.default;
    }
  });
});
;define("emb-lib-finder/components/hero-block/index", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="jumbotron jumbotron-fluid bg-light text-info mt-4 d-flex flex-column align-items-center">
    <div class="text-center border-bottom border-info w-75">
      <div class="w-auto display-4">
        <FaIcon 
          @icon="glasses" 
          @prefix="fas" />
        Library finder app
      </div>
      <div class="">Powered by 
        <em class="book-font">Ember</em> & <em class="book-font">Ember-bootstrap</em></div>
      <div class=""> Get your registration number by inputting your email below.</div>
    </div>
    
    <div class="mt-4  w-50">
      <BsForm class="d-flex flex-column align-items-center" as |form|>  
        <Input 
          @id="email_address" 
          @value={{this.email}}
          name="email_address" 
          type="text" 
          autocomplete="email" 
          placeholder="Please input your email adress"
          class="form-control mb-2"/>
  
        <form.submitButton 
          disabled={{this.isDisabled}}
          class="{{if this.isDisabled 'disabled'}} btn-info w-25"
          {{on 'click' this.submitInvitation}}
          >Submit</form.submitButton>
      </BsForm>
      {{#if this.alertMessage}}
        <Alert @color="success">{{this.alertMessage}}</Alert>
      {{/if}}
    </div>
  </div>
  */
  {
    "id": "yU3p9O4M",
    "block": "{\"symbols\":[\"form\"],\"statements\":[[10,\"div\"],[14,0,\"jumbotron jumbotron-fluid bg-light text-info mt-4 d-flex flex-column align-items-center\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"text-center border-bottom border-info w-75\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"w-auto display-4\"],[12],[2,\"\\n      \"],[8,\"fa-icon\",[],[[\"@icon\",\"@prefix\"],[\"glasses\",\"fas\"]],null],[2,\"\\n      Library finder app\\n    \"],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"\"],[12],[2,\"Powered by \\n      \"],[10,\"em\"],[14,0,\"book-font\"],[12],[2,\"Ember\"],[13],[2,\" & \"],[10,\"em\"],[14,0,\"book-font\"],[12],[2,\"Ember-bootstrap\"],[13],[13],[2,\"\\n    \"],[10,\"div\"],[14,0,\"\"],[12],[2,\" Get your registration number by inputting your email below.\"],[13],[2,\"\\n  \"],[13],[2,\"\\n  \\n  \"],[10,\"div\"],[14,0,\"mt-4  w-50\"],[12],[2,\"\\n    \"],[8,\"bs-form\",[[24,0,\"d-flex flex-column align-items-center\"]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"  \\n      \"],[8,\"input\",[[24,3,\"email_address\"],[24,\"autocomplete\",\"email\"],[24,\"placeholder\",\"Please input your email adress\"],[24,0,\"form-control mb-2\"],[24,4,\"text\"]],[[\"@id\",\"@value\"],[\"email_address\",[32,0,[\"email\"]]]],null],[2,\"\\n\\n      \"],[8,[32,1,[\"submitButton\"]],[[16,\"disabled\",[32,0,[\"isDisabled\"]]],[16,0,[31,[[30,[36,0],[[32,0,[\"isDisabled\"]],\"disabled\"],null],\" btn-info w-25\"]]],[4,[38,1],[\"click\",[32,0,[\"submitInvitation\"]]],null]],[[],[]],[[\"default\"],[{\"statements\":[[2,\"Submit\"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"parameters\":[1]}]]],[2,\"\\n\"],[6,[37,0],[[32,0,[\"alertMessage\"]]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,\"alert\",[],[[\"@color\"],[\"success\"]],[[\"default\"],[{\"statements\":[[1,[32,0,[\"alertMessage\"]]]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"if\",\"on\"]}",
    "meta": {
      "moduleName": "emb-lib-finder/components/hero-block/index.hbs"
    }
  });

  let HeroBlockComponent = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._action, (_class = (_temp = class HeroBlockComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "email", _descriptor2, this);

      _initializerDefineProperty(this, "alertMessage", _descriptor3, this);

      _initializerDefineProperty(this, "deleteMesage", _descriptor4, this);
    }

    get isValid() {
      return this.email.match(/^.+@.+\..+$/);
    }

    get isDisabled() {
      return !this.isValid;
    }

    submitInvitation() {
      this.store.createRecord('invitation', {
        email: this.email
      }).save().then(() => {
        this.email = '';
        this.alertMessage = `Your email adress ${this.email} has been successfully added to the invitation list`;
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "email", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "alertMessage", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "deleteMesage", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "submitInvitation", [_dec5], Object.getOwnPropertyDescriptor(_class.prototype, "submitInvitation"), _class.prototype)), _class));
  _exports.default = HeroBlockComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, HeroBlockComponent);
});
;define("emb-lib-finder/components/library-container", ["exports", "libraries/components/library-container"], function (_exports, _libraryContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _libraryContainer.default;
    }
  });
});
;define("emb-lib-finder/components/link-to-external", ["exports", "ember-engines/components/link-to-external"], function (_exports, _linkToExternal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _linkToExternal.default;
    }
  });
});
;define("emb-lib-finder/components/main-navigation/dropdown-link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="dropdown inline-block relative z-1">
    <BsDropdown as |dd|>
      <dd.button>{{@links.dropdownName}}</dd.button>
      <dd.menu as |ddm|>
        {{#each @links.links as |link|}}
          <ddm.item>
            <LinkTo 
              @route={{link.linkRoute}}
              class="nav-link" >
              {{link.linkName}}
            </LinkTo>
          </ddm.item>
        {{/each}}
      </dd.menu>
    </BsDropdown>
  </div>
  
  */
  {
    "id": "KBuOaPiB",
    "block": "{\"symbols\":[\"dd\",\"ddm\",\"link\",\"@links\"],\"statements\":[[10,\"div\"],[14,0,\"dropdown inline-block relative z-1\"],[12],[2,\"\\n  \"],[8,\"bs-dropdown\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n    \"],[8,[32,1,[\"button\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[1,[32,4,[\"dropdownName\"]]]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,[32,1,[\"menu\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,4,[\"links\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[8,[32,2,[\"item\"]],[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n          \"],[8,\"link-to\",[[24,0,\"nav-link\"]],[[\"@route\"],[[32,3,[\"linkRoute\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[1,[32,3,[\"linkName\"]]],[2,\"\\n          \"]],\"parameters\":[]}]]],[2,\"\\n        \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[3]}]]],[2,\"    \"]],\"parameters\":[2]}]]],[2,\"\\n  \"]],\"parameters\":[1]}]]],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "emb-lib-finder/components/main-navigation/dropdown-link.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("emb-lib-finder/components/main-navigation/index", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> 
    <div class="container">
      {{!-- Brand --}}
      <div class="d-flex align-items-center">
        <div class="navbar-brand">
          <MainNavigation::Link 
            @route={{'index'}}>
              <FaIcon @icon="glasses" @prefix="fas" @size="2x" class="text-info"/>      
          </MainNavigation::Link>
        </div>
  
        {{!-- Main navigation --}}
        <div class="navbar-nav">
          {{#each this.navLinks as |link|}}
            <MainNavigation::NavLink
              @route={{link.linkRoute}}>
              {{link.linkName}}
            </MainNavigation::NavLink>
          {{/each}}
        </div>
      </div>
  
      
      {{!-- Admin dropdown --}}
      <div class="navbar-link">
        <MainNavigation::DropdownLink @links={{this.dropDownLinks}}/>
      </div>
    </div>
  </nav>
  
  
  
  */
  {
    "id": "JQNTm7wC",
    "block": "{\"symbols\":[\"link\"],\"statements\":[[10,\"nav\"],[14,0,\"navbar navbar-expand-lg navbar-dark bg-dark\"],[12],[2,\" \\n  \"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n\"],[2,\"    \"],[10,\"div\"],[14,0,\"d-flex align-items-center\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"navbar-brand\"],[12],[2,\"\\n        \"],[8,\"main-navigation/link\",[],[[\"@route\"],[\"index\"]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[8,\"fa-icon\",[[24,0,\"text-info\"]],[[\"@icon\",\"@prefix\",\"@size\"],[\"glasses\",\"fas\",\"2x\"]],null],[2,\"      \\n        \"]],\"parameters\":[]}]]],[2,\"\\n      \"],[13],[2,\"\\n\\n\"],[2,\"      \"],[10,\"div\"],[14,0,\"navbar-nav\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,0,[\"navLinks\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"          \"],[8,\"main-navigation/nav-link\",[],[[\"@route\"],[[32,1,[\"linkRoute\"]]]],[[\"default\"],[{\"statements\":[[2,\"\\n            \"],[1,[32,1,[\"linkName\"]]],[2,\"\\n          \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \\n\"],[2,\"    \"],[10,\"div\"],[14,0,\"navbar-link\"],[12],[2,\"\\n      \"],[8,\"main-navigation/dropdown-link\",[],[[\"@links\"],[[32,0,[\"dropDownLinks\"]]]],null],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\\n\\n\"]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "emb-lib-finder/components/main-navigation/index.hbs"
    }
  });

  class MainNavigationComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "navLinks", [{
        linkRoute: 'contact',
        linkName: 'Contact'
      }, {
        linkRoute: 'about',
        linkName: 'About'
      }, {
        linkRoute: 'libraries.show',
        linkName: 'Libraries'
      }, {
        linkRoute: 'authors',
        linkName: 'Authors'
      }, {
        linkRoute: 'books',
        linkName: 'Buy books'
      }, {
        linkRoute: 'shop',
        linkName: 'Cart'
      }]);

      _defineProperty(this, "dropDownLinks", {
        dropdownName: 'Admin',
        links: [{
          linkRoute: 'admin.invitations',
          linkName: 'Invitations'
        }, {
          linkRoute: 'admin.messages',
          linkName: 'Messages'
        }, {
          linkRoute: 'admin.invoices',
          linkName: 'Invoices'
        }, {
          linkRoute: 'admin.newbook',
          linkName: 'Add Book'
        }]
      });
    }

  }

  _exports.default = MainNavigationComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, MainNavigationComponent);
});
;define("emb-lib-finder/components/main-navigation/link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <LinkTo 
    class="nav-link"
    @route={{@route}}> 
    {{yield}}
  </LinkTo>
  
  */
  {
    "id": "HmN2JrzX",
    "block": "{\"symbols\":[\"@route\",\"&default\"],\"statements\":[[8,\"link-to\",[[24,0,\"nav-link\"]],[[\"@route\"],[[32,1]]],[[\"default\"],[{\"statements\":[[2,\" \\n  \"],[18,2,null],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "emb-lib-finder/components/main-navigation/link.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("emb-lib-finder/components/main-navigation/nav-link", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <LinkTo 
    @route={{@route}}
    class="nav-link">
    {{yield}}
  </LinkTo>
  */
  {
    "id": "4GsLco9j",
    "block": "{\"symbols\":[\"@route\",\"&default\"],\"statements\":[[8,\"link-to\",[[24,0,\"nav-link\"]],[[\"@route\"],[[32,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n  \"],[18,2,null],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "emb-lib-finder/components/main-navigation/nav-link.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
;define("emb-lib-finder/components/table", ["exports", "shared-components/components/table"], function (_exports, _table) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _table.default;
    }
  });
});
;define("emb-lib-finder/components/user-info-form", ["exports", "shop/components/user-info-form"], function (_exports, _userInfoForm) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _userInfoForm.default;
    }
  });
});
;define("emb-lib-finder/config/asset-manifest", ["exports", "require", "emb-lib-finder/config/environment"], function (_exports, _require, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const modulePrefix = _environment.default.modulePrefix;
  const metaName = `${modulePrefix}/config/asset-manifest`;
  const nodeName = `${modulePrefix}/config/node-asset-manifest`;
  let config = {};

  try {
    // If we have a Node version of the asset manifest, use that for FastBoot and
    // similar environments.
    if (_require.default.has(nodeName)) {
      config = (0, _require.default)(nodeName).default; // eslint-disable-line
    } else {
      const rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
      config = JSON.parse(unescape(rawConfig));
    }
  } catch (err) {
    throw new Error('Failed to load asset manifest. For browser environments, verify the meta tag with name "' + metaName + '" is present. For non-browser environments, verify that you included the node-asset-manifest module.');
  }

  var _default = config;
  _exports.default = _default;
});
;define("emb-lib-finder/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
});
;define("emb-lib-finder/helpers/-element", ["exports", "ember-element-helper/helpers/-element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("emb-lib-finder/helpers/-has-block-params", ["exports", "ember-named-blocks-polyfill/helpers/-has-block-params"], function (_exports, _hasBlockParams) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasBlockParams.default;
    }
  });
});
;define("emb-lib-finder/helpers/-has-block", ["exports", "ember-named-blocks-polyfill/helpers/-has-block"], function (_exports, _hasBlock) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _hasBlock.default;
    }
  });
});
;define("emb-lib-finder/helpers/-is-named-block-invocation", ["exports", "ember-named-blocks-polyfill/helpers/-is-named-block-invocation"], function (_exports, _isNamedBlockInvocation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isNamedBlockInvocation.default;
    }
  });
});
;define("emb-lib-finder/helpers/-named-block-invocation", ["exports", "ember-named-blocks-polyfill/helpers/-named-block-invocation"], function (_exports, _namedBlockInvocation) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _namedBlockInvocation.default;
    }
  });
});
;define("emb-lib-finder/helpers/app-version", ["exports", "emb-lib-finder/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("emb-lib-finder/helpers/bs-contains", ["exports", "ember-bootstrap/helpers/bs-contains"], function (_exports, _bsContains) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsContains.default;
    }
  });
  Object.defineProperty(_exports, "bsContains", {
    enumerable: true,
    get: function () {
      return _bsContains.bsContains;
    }
  });
});
;define("emb-lib-finder/helpers/bs-default", ["exports", "ember-bootstrap/helpers/bs-default"], function (_exports, _bsDefault) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsDefault.default;
    }
  });
});
;define("emb-lib-finder/helpers/bs-eq", ["exports", "ember-bootstrap/helpers/bs-eq"], function (_exports, _bsEq) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsEq.default;
    }
  });
});
;define("emb-lib-finder/helpers/bs-noop", ["exports", "ember-bootstrap/helpers/bs-noop"], function (_exports, _bsNoop) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsNoop.default;
    }
  });
});
;define("emb-lib-finder/helpers/bs-size-class", ["exports", "ember-bootstrap/helpers/bs-size-class"], function (_exports, _bsSizeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsSizeClass.default;
    }
  });
});
;define("emb-lib-finder/helpers/bs-type-class", ["exports", "ember-bootstrap/helpers/bs-type-class"], function (_exports, _bsTypeClass) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _bsTypeClass.default;
    }
  });
});
;define("emb-lib-finder/helpers/cancel-all", ["exports", "ember-concurrency/helpers/cancel-all"], function (_exports, _cancelAll) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cancelAll.default;
    }
  });
});
;define("emb-lib-finder/helpers/did-insert", ["exports", "ember-render-helpers/helpers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("emb-lib-finder/helpers/did-update", ["exports", "ember-render-helpers/helpers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("emb-lib-finder/helpers/element", ["exports", "ember-element-helper/helpers/element"], function (_exports, _element) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _element.default;
    }
  });
});
;define("emb-lib-finder/helpers/formatter", ["exports", "admin/helpers/formatter"], function (_exports, _formatter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _formatter.default;
    }
  });
  Object.defineProperty(_exports, "formatter", {
    enumerable: true,
    get: function () {
      return _formatter.formatter;
    }
  });
});
;define("emb-lib-finder/helpers/in-repo-addon", [], function () {
  'use strict';

  const path = require("path");

  const fs = require("fs-extra");

  const fixturify = require("fixturify");

  class InRepoAddon {
    static generate(app, name) {
      let args = ['generate', 'in-repo-addon', name];
      return app.runEmberCommand.apply(app, args).then(() => {
        let addon = new InRepoAddon(app, name);
        addon.editPackageJSON(pkg => pkg.dependencies = {
          'ember-cli-htmlbars': '*'
        });
        return addon;
      });
    }

    constructor(app, name) {
      this.name = name;
      this.app = app;
      this.path = path.join(app.path, 'lib', name);
    }

    editPackageJSON(editor) {
      let packageJSONPath = path.join(this.path, 'package.json');
      let pkg = fs.readJsonSync(packageJSONPath);
      editor(pkg);
      fs.writeJsonSync(packageJSONPath, pkg);
    }

    writeFixture(fixture) {
      fixturify.writeSync(this.path, fixture);
    }

    nest(addon) {
      this.editPackageJSON(pkg => {
        pkg['ember-addon'] = pkg['ember-addon'] || {};
        pkg['ember-addon'].paths = pkg['ember-addon'].paths || [];
        pkg['ember-addon'].paths.push(`../${addon.name}`);
      });
    }

    generateNestedAddon(name) {
      // Generate another in-repo-addon at the app level...
      let args = Array.prototype.slice.call(arguments);
      args.unshift(this.app);
      return InRepoAddon.generate.apply(null, args).then(addon => {
        // Remove the in-repo-addon from the app...
        this.app.editPackageJSON(pkg => {
          pkg['ember-addon'].paths = pkg['ember-addon'].paths.filter(path => path !== `lib/${name}`);
        }); // Add the in-repo-addon to this engine.

        this.editPackageJSON(pkg => {
          pkg['ember-addon'] = pkg['ember-addon'] || {};
          pkg['ember-addon'].paths = pkg['ember-addon'].paths || [];
          pkg['ember-addon'].paths.push(`../${name}`);
        });
        return addon;
      });
    }

  }

  module.exports = InRepoAddon;
});
;define("emb-lib-finder/helpers/in-repo-engine", [], function () {
  'use strict';

  const InRepoAddon = require("emb-lib-finder/helpers/in-repo-addon");

  class InRepoEngine extends InRepoAddon {
    static generate(app, name, options) {
      let args = ['generate', 'in-repo-engine', name];

      if (typeof options.lazy !== 'undefined') {
        args.push('--lazy', options.lazy);
      }

      if (typeof options.type !== 'undefined') {
        args.push('--type', options.type);
      }

      return app.runEmberCommand.apply(app, args).then(() => {
        let engine = new InRepoEngine(app, name); // Set up a simple default CSS file

        engine.writeFixture({
          addon: {
            styles: {
              'app.css': `/* ${name}.css */`
            }
          }
        });
        return engine;
      });
    }

    generateNestedEngine(name) {
      // Generate another in-repo-engine at the app level...
      let args = Array.prototype.slice.call(arguments);
      args.unshift(this.app);
      return InRepoEngine.generate.apply(null, args).then(engine => {
        // Remove the in-repo-engine from the app...
        this.app.editPackageJSON(pkg => {
          pkg['ember-addon'].paths = pkg['ember-addon'].paths.filter(path => path !== `lib/${name}`);
        }); // Add the in-repo-engine to this engine.

        this.editPackageJSON(pkg => {
          pkg['ember-addon'] = pkg['ember-addon'] || {};
          pkg['ember-addon'].paths = pkg['ember-addon'].paths || [];
          pkg['ember-addon'].paths.push(`../${name}`);
        });
        return engine;
      });
    }

  }

  module.exports = InRepoEngine;
});
;define("emb-lib-finder/helpers/on-document", ["exports", "ember-on-helper/helpers/on-document"], function (_exports, _onDocument) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onDocument.default;
    }
  });
});
;define("emb-lib-finder/helpers/on-window", ["exports", "ember-on-helper/helpers/on-window"], function (_exports, _onWindow) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _onWindow.default;
    }
  });
});
;define("emb-lib-finder/helpers/on", ["exports", "ember-on-helper/helpers/on"], function (_exports, _on) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _on.default;
    }
  });
});
;define("emb-lib-finder/helpers/perform", ["exports", "ember-concurrency/helpers/perform"], function (_exports, _perform) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _perform.default;
    }
  });
});
;define("emb-lib-finder/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("emb-lib-finder/helpers/ref-to", ["exports", "ember-ref-bucket/helpers/ref-to"], function (_exports, _refTo) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
  Object.defineProperty(_exports, "refTo", {
    enumerable: true,
    get: function () {
      return _refTo.default;
    }
  });
});
;define("emb-lib-finder/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("emb-lib-finder/helpers/task", ["exports", "ember-concurrency/helpers/task"], function (_exports, _task) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _task.default;
    }
  });
});
;define("emb-lib-finder/helpers/will-destroy", ["exports", "ember-render-helpers/helpers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("emb-lib-finder/index", [], function () {
  "use strict";
});
;define("emb-lib-finder/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "emb-lib-finder/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("emb-lib-finder/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("emb-lib-finder/initializers/ember-concurrency", ["exports", "ember-concurrency/initializers/ember-concurrency"], function (_exports, _emberConcurrency) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberConcurrency.default;
    }
  });
});
;define("emb-lib-finder/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
});
;define("emb-lib-finder/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
    This code initializes EmberData in an Ember application.
  
    It ensures that the `store` service is automatically injected
    as the `store` property on all routes and controllers.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("emb-lib-finder/initializers/emberfire", ["exports", "emberfire/initializers/emberfire"], function (_exports, _emberfire) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberfire.default;
    }
  });
});
;define("emb-lib-finder/initializers/engines", ["exports", "ember-engines/initializers/engines"], function (_exports, _engines) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _engines.default;
    }
  });
  Object.defineProperty(_exports, "initialize", {
    enumerable: true,
    get: function () {
      return _engines.initialize;
    }
  });
});
;define("emb-lib-finder/initializers/export-application-global", ["exports", "emb-lib-finder/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("emb-lib-finder/initializers/load-bootstrap-config", ["exports", "emb-lib-finder/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize()
  /* container, application */
  {
    _config.default.load(_environment.default['ember-bootstrap'] || {});
  }

  var _default = {
    name: 'load-bootstrap-config',
    initialize
  };
  _exports.default = _default;
});
;define("emb-lib-finder/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',

    initialize() {}

  };
  _exports.default = _default;
});
;define("emb-lib-finder/instance-initializers/load-asset-manifest", ["exports", "emb-lib-finder/config/asset-manifest"], function (_exports, _assetManifest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  /**
   * Initializes the AssetLoader service with a generated asset-manifest.
   */
  function initialize(instance) {
    const service = instance.lookup('service:asset-loader');
    service.pushManifest(_assetManifest.default);
  }

  var _default = {
    name: 'load-asset-manifest',
    initialize
  };
  _exports.default = _default;
});
;define("emb-lib-finder/models/author", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let AuthorModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.hasMany)('book'), _dec3 = Ember._tracked, (_class = (_temp = class AuthorModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "books", _descriptor2, this);

      _initializerDefineProperty(this, "isEditing", _descriptor3, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "books", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "isEditing", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  })), _class));
  _exports.default = AuthorModel;
});
;define("emb-lib-finder/models/book", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let BookModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('number'), _dec4 = (0, _model.attr)('number'), _dec5 = (0, _model.belongsTo)('author'), _dec6 = (0, _model.belongsTo)('library'), _dec7 = Ember._tracked, _dec8 = Ember._tracked, (_class = (_temp = class BookModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "ISDN", _descriptor2, this);

      _initializerDefineProperty(this, "price", _descriptor3, this);

      _initializerDefineProperty(this, "amount", _descriptor4, this);

      _initializerDefineProperty(this, "author", _descriptor5, this);

      _initializerDefineProperty(this, "library", _descriptor6, this);

      _initializerDefineProperty(this, "addingBook", _descriptor7, this);

      _initializerDefineProperty(this, "booksBought", _descriptor8, this);
    }

    get notAvailable() {
      return !(this.amount - this.booksBought);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "ISDN", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "price", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "amount", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "author", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "library", [_dec6], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "addingBook", [_dec7], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return false;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "booksBought", [_dec8], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 0;
    }
  })), _class));
  _exports.default = BookModel;
});
;define("emb-lib-finder/models/invitation", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let InvitationModel = (_dec = (0, _model.attr)('string'), (_class = (_temp = class InvitationModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "email", _descriptor, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "email", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = InvitationModel;
});
;define("emb-lib-finder/models/invoice", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let InvoiceModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), (_class = (_temp = class InvoiceModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "userInfo", _descriptor, this);

      _initializerDefineProperty(this, "items", _descriptor2, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "userInfo", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "items", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = InvoiceModel;
});
;define("emb-lib-finder/models/library", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let LibraryModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), _dec4 = (0, _model.attr)('string'), _dec5 = (0, _model.hasMany)('book'), (_class = (_temp = class LibraryModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "name", _descriptor, this);

      _initializerDefineProperty(this, "address", _descriptor2, this);

      _initializerDefineProperty(this, "phoneNumber", _descriptor3, this);

      _initializerDefineProperty(this, "additional", _descriptor4, this);

      _initializerDefineProperty(this, "books", _descriptor5, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "name", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "address", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "phoneNumber", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "additional", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "books", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = LibraryModel;
});
;define("emb-lib-finder/models/message", ["exports", "@ember-data/model"], function (_exports, _model) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let MessageModel = (_dec = (0, _model.attr)('string'), _dec2 = (0, _model.attr)('string'), _dec3 = (0, _model.attr)('string'), (_class = (_temp = class MessageModel extends _model.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "email", _descriptor, this);

      _initializerDefineProperty(this, "dateSent", _descriptor2, this);

      _initializerDefineProperty(this, "message", _descriptor3, this);
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "email", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "dateSent", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "message", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = MessageModel;
});
;define("emb-lib-finder/modifiers/create-ref", ["exports", "ember-ref-bucket/modifiers/create-ref"], function (_exports, _createRef) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _createRef.default;
    }
  });
});
;define("emb-lib-finder/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("emb-lib-finder/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("emb-lib-finder/modifiers/focus-trap", ["exports", "ember-focus-trap/modifiers/focus-trap"], function (_exports, _focusTrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _focusTrap.default;
    }
  });
});
;define("emb-lib-finder/modifiers/style", ["exports", "ember-style-modifier/modifiers/style"], function (_exports, _style) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _style.default;
    }
  });
});
;define("emb-lib-finder/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("emb-lib-finder/router", ["exports", "emb-lib-finder/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);

      _defineProperty(this, "location", _environment.default.locationType);

      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {
    this.route('contact');
    this.route('about');
    this.mount('admin', {
      path: '/admin'
    });
    this.mount('books', {
      path: '/books'
    });
    this.mount('authors', {
      path: '/authors'
    });
    this.mount('libraries', {
      path: '/libraries'
    });
    this.mount('shop', {
      path: '/shop'
    });
  });
});
;define("emb-lib-finder/routes/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class AboutRoute extends Ember.Route {}

  _exports.default = AboutRoute;
});
;define("emb-lib-finder/routes/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class ContactRoute extends Ember.Route {}

  _exports.default = ContactRoute;
});
;define("emb-lib-finder/routes/invoices", ["exports", "admin/routes/invoices"], function (_exports, _invoices) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoices.default;
    }
  });
});
;define("emb-lib-finder/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
});
;define("emb-lib-finder/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
});
;define("emb-lib-finder/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
});
;define("emb-lib-finder/services/asset-loader", ["exports", "ember-asset-loader/services/asset-loader"], function (_exports, _assetLoader) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _assetLoader.default;
    }
  });
});
;define("emb-lib-finder/services/firebase-app", ["exports", "emberfire/services/firebase-app"], function (_exports, _firebaseApp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _firebaseApp.default;
    }
  });
});
;define("emb-lib-finder/services/firebase", ["exports", "emberfire/services/firebase"], function (_exports, _firebase) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _firebase.default;
    }
  });
});
;define("emb-lib-finder/services/shop", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let ShopService = (_dec = Ember.inject.service, _dec2 = Ember.inject.service, _dec3 = Ember._action, _dec4 = Ember._action, (_class = (_temp = class ShopService extends Ember.Service {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "router", _descriptor2, this);

      _defineProperty(this, "cart", Ember.A([]));
    }

    get cartItems() {
      return this.cart;
    }

    addToCart({
      id,
      name,
      price,
      author
    }) {
      let authorName = author.get('name');
      this.cart.pushObject({
        id,
        name,
        price,
        authorName
      });
    }

    orderItems(userInfo, userCart) {
      this.store.createRecord('invoice', {
        userInfo,
        items: userCart
      }).save().then(() => {
        this.cart.clear();
      }).then(() => {
        this.router.transitionTo('books');
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "router", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "addToCart", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "addToCart"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "orderItems", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "orderItems"), _class.prototype)), _class));
  _exports.default = ShopService;
});
;define("emb-lib-finder/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
});
;define("emb-lib-finder/templates/about", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ZE1qygm3",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"container w-75\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"text-center display-4 my-4\"],[12],[2,\"About Page\"],[13],[2,\"\\n\\n  \"],[10,\"p\"],[14,0,\"text-justify\"],[12],[2,\"\\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur molestias expedita nulla, culpa accusantium corrupti nihil nam at eius, iste, quae provident quam autem labore esse. Illum delectus fuga deserunt reiciendis expedita porro beatae nesciunt ex, rerum quaerat. Quas rerum at ipsum voluptate nesciunt dolor. Culpa repudiandae id nulla nisi suscipit, tempora, eum, inventore et accusantium sapiente fuga nesciunt porro? Necessitatibus, iste asperiores eligendi rerum esse quas fuga. Perferendis quod est accusamus ullam maxime aut debitis in tempore dolorem ratione, provident nam sunt nesciunt, tenetur cum saepe? Nihil quae architecto eos facilis ipsum dolorem suscipit, quasi, dignissimos illo veniam nam quaerat inventore laudantium delectus reprehenderit accusamus aliquid provident. Est laborum sapiente iure aliquam amet assumenda quod rerum, tempora officiis illum eveniet in recusandae, adipisci minima veritatis nam. Dolorum, dolore nostrum aliquid laboriosam, ea hic est eum nam modi nihil at corrupti! Porro impedit reprehenderit autem facilis dolor, ex facere distinctio architecto. Animi voluptas cum similique. Asperiores consequuntur reprehenderit debitis nihil ad autem eaque aut esse ab iusto, optio temporibus deserunt. Et sunt inventore quasi ipsum cum porro. Ipsa quisquam veritatis voluptates cumque sequi ipsam inventore fugit. Placeat ipsa exercitationem recusandae voluptatem cumque, similique aperiam inventore id deleniti nisi animi illo!\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "emb-lib-finder/templates/about.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-lib-finder/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "fU2aRUJS",
    "block": "{\"symbols\":[],\"statements\":[[8,\"main-navigation\",[],[[],[]],null],[2,\"\\n\\n\"],[10,\"div\"],[14,0,\"container\"],[12],[2,\"\\n  \"],[1,[30,[36,1],[[30,[36,0],null,null]],null]],[2,\"\\n\"],[13],[2,\"\\n\\n\"],[8,\"footer\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "emb-lib-finder/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-lib-finder/templates/components/ember-popper-targeting-parent", ["exports", "ember-popper/templates/components/ember-popper-targeting-parent"], function (_exports, _emberPopperTargetingParent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopperTargetingParent.default;
    }
  });
});
;define("emb-lib-finder/templates/components/ember-popper", ["exports", "ember-popper/templates/components/ember-popper"], function (_exports, _emberPopper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberPopper.default;
    }
  });
});
;define("emb-lib-finder/templates/contact", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "w9TzfGd5",
    "block": "{\"symbols\":[],\"statements\":[[8,\"contact-form\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "emb-lib-finder/templates/contact.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-lib-finder/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Myp5w7cr",
    "block": "{\"symbols\":[],\"statements\":[[8,\"hero-block\",[],[[],[]],null],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "emb-lib-finder/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-lib-finder/templates/invoices", ["exports", "admin/templates/invoices"], function (_exports, _invoices) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _invoices.default;
    }
  });
});
;define("emb-lib-finder/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
});
;define("emb-lib-finder/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
});
;define("emb-lib-finder/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
});
;define("emb-lib-finder/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
});
;define("emb-lib-finder/utils/cartnormalizer", ["exports", "shop/utils/cartnormalizer"], function (_exports, _cartnormalizer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _cartnormalizer.default;
    }
  });
});
;

;define('emb-lib-finder/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("emb-lib-finder/app")["default"].create({"name":"emb-lib-finder","version":"0.0.0+d969b439"});
          }
        
//# sourceMappingURL=emb-lib-finder.map
