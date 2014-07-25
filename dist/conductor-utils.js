!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define(["underscore"],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.conductorUtils=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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
    var optionsAndContext = _.extend({}, options, context);
    this.requireOptions(optionsAndContext, requiredOptions);
    _.each(requiredOptions, function (key) {
      context[key] = options[key] || context[key];
    });
  }
};

},{"underscore":undefined}]},{},[1])(1)
});