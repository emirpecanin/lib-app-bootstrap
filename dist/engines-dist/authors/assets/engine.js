define.alias("@glimmer/component/-private/ember-component-manager", "authors/component-managers/glimmer");
define("authors/components/-dynamic-element-alt", ["exports"], function (_exports) {
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
define("authors/components/-dynamic-element", ["exports"], function (_exports) {
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
define.alias("shared-components/components/alert", "authors/components/alert");
define.alias("ember-bootstrap/components/bs-accordion", "authors/components/bs-accordion");
define.alias("ember-bootstrap/components/bs-accordion/item", "authors/components/bs-accordion/item");
define.alias("ember-bootstrap/components/bs-accordion/item/body", "authors/components/bs-accordion/item/body");
define.alias("ember-bootstrap/components/bs-accordion/item/title", "authors/components/bs-accordion/item/title");
define.alias("ember-bootstrap/components/bs-alert", "authors/components/bs-alert");
define.alias("ember-bootstrap/components/bs-button-group", "authors/components/bs-button-group");
define.alias("ember-bootstrap/components/bs-button-group/button", "authors/components/bs-button-group/button");
define.alias("ember-bootstrap/components/bs-button", "authors/components/bs-button");
define.alias("ember-bootstrap/components/bs-carousel", "authors/components/bs-carousel");
define.alias("ember-bootstrap/components/bs-carousel/slide", "authors/components/bs-carousel/slide");
define.alias("ember-bootstrap/components/bs-collapse", "authors/components/bs-collapse");
define.alias("ember-bootstrap/components/bs-dropdown", "authors/components/bs-dropdown");
define.alias("ember-bootstrap/components/bs-dropdown/button", "authors/components/bs-dropdown/button");
define.alias("ember-bootstrap/components/bs-dropdown/menu", "authors/components/bs-dropdown/menu");
define.alias("ember-bootstrap/components/bs-dropdown/menu/divider", "authors/components/bs-dropdown/menu/divider");
define.alias("ember-bootstrap/components/bs-dropdown/menu/item", "authors/components/bs-dropdown/menu/item");
define.alias("ember-bootstrap/components/bs-dropdown/menu/link-to", "authors/components/bs-dropdown/menu/link-to");
define.alias("ember-bootstrap/components/bs-dropdown/toggle", "authors/components/bs-dropdown/toggle");
define.alias("ember-bootstrap/components/bs-form", "authors/components/bs-form");
define.alias("ember-bootstrap/components/bs-form/element", "authors/components/bs-form/element");
define.alias("ember-bootstrap/components/bs-form/element/control", "authors/components/bs-form/element/control");
define.alias("ember-bootstrap/components/bs-form/element/control/checkbox", "authors/components/bs-form/element/control/checkbox");
define.alias("ember-bootstrap/components/bs-form/element/control/input", "authors/components/bs-form/element/control/input");
define.alias("ember-bootstrap/components/bs-form/element/control/radio", "authors/components/bs-form/element/control/radio");
define.alias("ember-bootstrap/components/bs-form/element/control/textarea", "authors/components/bs-form/element/control/textarea");
define.alias("ember-bootstrap/components/bs-form/element/errors", "authors/components/bs-form/element/errors");
define.alias("ember-bootstrap/components/bs-form/element/feedback-icon", "authors/components/bs-form/element/feedback-icon");
define.alias("ember-bootstrap/components/bs-form/element/help-text", "authors/components/bs-form/element/help-text");
define.alias("ember-bootstrap/components/bs-form/element/label", "authors/components/bs-form/element/label");
define.alias("ember-bootstrap/components/bs-form/element/layout/horizontal", "authors/components/bs-form/element/layout/horizontal");
define.alias("ember-bootstrap/components/bs-form/element/layout/horizontal/checkbox", "authors/components/bs-form/element/layout/horizontal/checkbox");
define.alias("ember-bootstrap/components/bs-form/element/layout/inline", "authors/components/bs-form/element/layout/inline");
define.alias("ember-bootstrap/components/bs-form/element/layout/inline/checkbox", "authors/components/bs-form/element/layout/inline/checkbox");
define.alias("ember-bootstrap/components/bs-form/element/layout/vertical", "authors/components/bs-form/element/layout/vertical");
define.alias("ember-bootstrap/components/bs-form/element/layout/vertical/checkbox", "authors/components/bs-form/element/layout/vertical/checkbox");
define.alias("ember-bootstrap/components/bs-form/element/legend", "authors/components/bs-form/element/legend");
define.alias("ember-bootstrap/components/bs-form/group", "authors/components/bs-form/group");
define.alias("ember-bootstrap/components/bs-modal-simple", "authors/components/bs-modal-simple");
define.alias("ember-bootstrap/components/bs-modal", "authors/components/bs-modal");
define.alias("ember-bootstrap/components/bs-modal/body", "authors/components/bs-modal/body");
define.alias("ember-bootstrap/components/bs-modal/dialog", "authors/components/bs-modal/dialog");
define.alias("ember-bootstrap/components/bs-modal/footer", "authors/components/bs-modal/footer");
define.alias("ember-bootstrap/components/bs-modal/header", "authors/components/bs-modal/header");
define.alias("ember-bootstrap/components/bs-modal/header/close", "authors/components/bs-modal/header/close");
define.alias("ember-bootstrap/components/bs-modal/header/title", "authors/components/bs-modal/header/title");
define.alias("ember-bootstrap/components/bs-nav", "authors/components/bs-nav");
define.alias("ember-bootstrap/components/bs-nav/item", "authors/components/bs-nav/item");
define.alias("ember-bootstrap/components/bs-nav/link-to", "authors/components/bs-nav/link-to");
define.alias("ember-bootstrap/components/bs-navbar", "authors/components/bs-navbar");
define.alias("ember-bootstrap/components/bs-navbar/content", "authors/components/bs-navbar/content");
define.alias("ember-bootstrap/components/bs-navbar/link-to", "authors/components/bs-navbar/link-to");
define.alias("ember-bootstrap/components/bs-navbar/nav", "authors/components/bs-navbar/nav");
define.alias("ember-bootstrap/components/bs-navbar/toggle", "authors/components/bs-navbar/toggle");
define.alias("ember-bootstrap/components/bs-popover", "authors/components/bs-popover");
define.alias("ember-bootstrap/components/bs-popover/element", "authors/components/bs-popover/element");
define.alias("ember-bootstrap/components/bs-progress", "authors/components/bs-progress");
define.alias("ember-bootstrap/components/bs-progress/bar", "authors/components/bs-progress/bar");
define.alias("ember-bootstrap/components/bs-tab", "authors/components/bs-tab");
define.alias("ember-bootstrap/components/bs-tab/pane", "authors/components/bs-tab/pane");
define.alias("ember-bootstrap/components/bs-tooltip", "authors/components/bs-tooltip");
define.alias("ember-bootstrap/components/bs-tooltip/element", "authors/components/bs-tooltip/element");
define.alias("ember-popper/components/ember-popper-targeting-parent", "authors/components/ember-popper-targeting-parent");
define.alias("ember-popper/components/ember-popper", "authors/components/ember-popper");
define.alias("shared-components/components/form", "authors/components/form");
define.alias("shared-components/components/table", "authors/components/table");
define("authors/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'authors/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define("authors/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let AuthorsController = (_dec = Ember._action, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, (_class = class AuthorsController extends Ember.Controller {
    removeAuthor(author) {
      author.destroyRecord();
    }

    toggleEditing(author) {
      author.isEditing = !author.isEditing;
    }

    saveChanges(author) {
      author.save().then(() => {
        this.toggleEditing(author);
      });
    }

    rejectChanges(author) {
      if (author.hasDirtyAttributes) {
        author.rollbackAttributes();
      }

      this.toggleEditing(author);
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "removeAuthor", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "removeAuthor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleEditing", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "toggleEditing"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveChanges", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "saveChanges"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "rejectChanges", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "rejectChanges"), _class.prototype)), _class));
  _exports.default = AuthorsController;
});
define("authors/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "authors/resolver", "authors/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    modulePrefix
  } = _environment.default;

  const Eng = _engine.default.extend({
    modulePrefix,
    Resolver: _resolver.default,
    dependencies: {
      services: ['store']
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define.alias("ember-element-helper/helpers/-element", "authors/helpers/-element");
define.alias("ember-named-blocks-polyfill/helpers/-has-block-params", "authors/helpers/-has-block-params");
define.alias("ember-named-blocks-polyfill/helpers/-has-block", "authors/helpers/-has-block");
define.alias("ember-named-blocks-polyfill/helpers/-is-named-block-invocation", "authors/helpers/-is-named-block-invocation");
define.alias("ember-named-blocks-polyfill/helpers/-named-block-invocation", "authors/helpers/-named-block-invocation");
define.alias("ember-bootstrap/helpers/bs-contains", "authors/helpers/bs-contains");
define.alias("ember-bootstrap/helpers/bs-default", "authors/helpers/bs-default");
define.alias("ember-bootstrap/helpers/bs-eq", "authors/helpers/bs-eq");
define.alias("ember-bootstrap/helpers/bs-noop", "authors/helpers/bs-noop");
define.alias("ember-bootstrap/helpers/bs-size-class", "authors/helpers/bs-size-class");
define.alias("ember-bootstrap/helpers/bs-type-class", "authors/helpers/bs-type-class");
define.alias("ember-concurrency/helpers/cancel-all", "authors/helpers/cancel-all");
define.alias("ember-render-helpers/helpers/did-insert", "authors/helpers/did-insert");
define.alias("ember-render-helpers/helpers/did-update", "authors/helpers/did-update");
define.alias("ember-element-helper/helpers/element", "authors/helpers/element");
define.alias("ember-on-helper/helpers/on-document", "authors/helpers/on-document");
define.alias("ember-on-helper/helpers/on-window", "authors/helpers/on-window");
define.alias("ember-on-helper/helpers/on", "authors/helpers/on");
define.alias("ember-concurrency/helpers/perform", "authors/helpers/perform");
define("authors/helpers/ref-to", ["exports", "ember-ref-bucket/helpers/ref-to"], function (_exports, _refTo) {
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
define.alias("ember-concurrency/helpers/task", "authors/helpers/task");
define.alias("ember-render-helpers/helpers/will-destroy", "authors/helpers/will-destroy");
define.alias("ember-concurrency/initializers/ember-concurrency", "authors/initializers/ember-concurrency");
define("authors/initializers/load-bootstrap-config", ["exports", "authors/config/environment", "ember-bootstrap/config"], function (_exports, _environment, _config) {
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
define.alias("ember-ref-bucket/modifiers/create-ref", "authors/modifiers/create-ref");
define.alias("@ember/render-modifiers/modifiers/did-insert", "authors/modifiers/did-insert");
define.alias("@ember/render-modifiers/modifiers/did-update", "authors/modifiers/did-update");
define.alias("ember-focus-trap/modifiers/focus-trap", "authors/modifiers/focus-trap");
define.alias("ember-style-modifier/modifiers/style", "authors/modifiers/style");
define.alias("@ember/render-modifiers/modifiers/will-destroy", "authors/modifiers/will-destroy");
define("authors/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define("authors/routes/application", ["exports"], function (_exports) {
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

  let AuthorsRoute = (_dec = Ember.inject.service, (_class = (_temp = class AuthorsRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    model() {
      return this.store.findAll('author');
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = AuthorsRoute;
});
define("authors/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "H+mYoSHC",
    "block": "{\"symbols\":[\"author\",\"@model\"],\"statements\":[[6,[37,2],[[32,2,[\"length\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"  \"],[10,\"div\"],[14,0,\"mt-4\"],[12],[2,\"\\n    \"],[8,\"table\",[],[[\"@header\"],[[30,[36,3],[\"Author's name (click on name to edit)\",\"Delete author\"],null]]],[[\"default\"],[{\"statements\":[[2,\"\\n\"],[6,[37,5],[[30,[36,4],[[30,[36,4],[[32,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[12],[2,\"\\n\"],[6,[37,2],[[32,1,[\"isEditing\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"            \"],[10,\"td\"],[14,0,\"flex justify-center \"],[12],[2,\"\\n              \"],[10,\"form\"],[14,0,\"input-group\"],[12],[2,\"\\n                \"],[8,\"input\",[[24,0,\"form-control\"]],[[\"@value\"],[[32,1,[\"name\"]]]],null],[2,\"\\n                \"],[10,\"div\"],[14,0,\"input-group-append\"],[12],[2,\"\\n                  \"],[11,\"button\"],[24,0,\"btn btn-outline-success\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"saveChanges\"]],[32,1]],null]],null],[12],[2,\"\\n                    Accept\\n                  \"],[13],[2,\"\\n                  \"],[11,\"button\"],[24,0,\"btn btn-outline-danger\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"rejectChanges\"]],[32,1]],null]],null],[12],[2,\" \\n                    Cancel\\n                  \"],[13],[2,\"\\n                \"],[13],[2,\"\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"            \"],[10,\"td\"],[14,0,\"align-middle\"],[12],[2,\" \\n              \"],[11,\"span\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"toggleEditing\"]],[32,1]],null]],null],[12],[1,[32,1,[\"name\"]]],[13],[2,\" \\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \\n          \"],[10,\"td\"],[12],[2,\"\\n            \"],[11,\"button\"],[24,0,\"btn btn-danger\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"removeAuthor\"]],[32,1]],null]],null],[12],[2,\"\\n              Remove\\n            \"],[13],[2,\"\\n          \"],[13],[2,\"\\n          \\n        \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"    \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[8,\"alert\",[],[[\"@color\"],[\"danger\"]],[[\"default\"],[{\"statements\":[[2,\" No authors in database \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\",\"if\",\"array\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "authors/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
define.alias("ember-popper/templates/components/ember-popper-targeting-parent", "authors/templates/components/ember-popper-targeting-parent");
define.alias("ember-popper/templates/components/ember-popper", "authors/templates/components/ember-popper");//# sourceMappingURL=engine.map
