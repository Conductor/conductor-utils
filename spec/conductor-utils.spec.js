'use strict';

var ConductorUtils = require('../');

describe("Conductor Utils", function () {
  beforeEach(function () {
    this.options = {
      conductor: 'conductor',
      searchlight: 'searchlight'
    };
  });

  describe("requireOptions", function () {
    beforeEach(function () {
      this.bindRequiredOptions = function (requiredKeys) {
        return ConductorUtils.requireOptions.
          bind(ConductorUtils, this.options, requiredKeys);
      };
    });

    it("succeeds if all provided keys are in the options object", function () {
      var requireOptions = this.bindRequiredOptions(['conductor', 'searchlight']);
      expect(requireOptions).not.to.throw(Error);
    });

    it("succeeds if the single provided string is in the options object", function () {
      var requireOptions = this.bindRequiredOptions('conductor');
      expect(requireOptions).not.to.throw(Error);
    });

    it("throws if not all of the provided keys are in the options object", function () {
      var requireOptions = this.bindRequiredOptions(['conductor', '[Not Provided]']);
      expect(requireOptions).to.throw(TypeError);
    });

     it("throws if options ar not provided", function () {
       this.options = null;
       var requireOptions = this.bindRequiredOptions([]);
       expect(requireOptions).to.throw(TypeError);
     });
  });

  describe("assignRequiredOptions", function () {
    beforeEach(function () {
      this.context = {};
    });

    it("assigns the values in the options to the context", function () {
      ConductorUtils.assignRequiredOptions(this.context, this.options, ['conductor']);
      expect(this.context).to.eql({ conductor: 'conductor' });
    });

    it("uses the value on the context if not provided by the option", function () {
      this.context.content = 'content';
      ConductorUtils.assignRequiredOptions(this.context, this.options, ['content', 'conductor']);
      expect(this.context).to.eql({
        conductor: 'conductor',
        content: 'content'
      });
    });

    it("throws if the combination of the context and options do not have all required keys", function () {
      var assignRequiredOptions = ConductorUtils.assignRequiredOptions.
        bind(this, this.context, this.options, ['conductor', '[Not Provided]']);
      expect(assignRequiredOptions).to.throw(TypeError);
    });
  });
});