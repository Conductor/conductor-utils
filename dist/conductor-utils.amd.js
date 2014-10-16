define('conductor-utils', ['underscore'], function () { var module = {}; 'use strict';

var _ = require('underscore');

module.exports = {
  /**
   * Require that a given object contain a given set of keys.  This
   * will throw an exception if it does not, which is a typical
   * pattern used in many Backbone classes.
   * @param options The object that must have the given attributes.
   * @param requireOptionKeys The keys that must be provided.
   */
  requireOptions: function (options, requireOptionKeys) {
    if (!options) {
      throw new TypeError("Options are required");
    }

    if (!_.isArray(requireOptionKeys)) {
      requireOptionKeys = [ requireOptionKeys ];
    }

    _.each(requireOptionKeys, function (key) {
      if (_.isUndefined(options[key])) {
        throw new TypeError("'" + key  + "' is required");
      }
    });
  },

  /**
   * Require that the provided options exist either on the object or in the
   * options. Assign the required options to the context, preferring the
   * value in the options to the one on the context
   * @param context
   * @param options
   * @param requiredOptions
   */
  assignRequiredOptions: function (context, options, requiredOptions) {
    options = options || {};
    var optionsAndContext = _.extend({}, options, context);
    this.requireOptions(optionsAndContext, requiredOptions);
    _.each(requiredOptions, function (key) {
      context[key] = options[key] || context[key];
    });
  }
};
; return module.exports; });