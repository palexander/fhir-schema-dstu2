var fhir = require('../../../lib');
var expect = require('chai').expect;

describe('elements.positiveInt', function () {
    var schema =  fhir.schema.positiveInt;

    it('validates positiveInt (1)', function () {
        var data = 1;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('validates positiveInt (32768)', function () {
        var data = 32768;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.true;
    });

    it('rejects an invalid positiveInt (0)', function () {
        var data = 0;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an invalid positiveInt (-1)', function () {
        var data = -1;

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });

    it('rejects an invalid positiveInt (fubar)', function () {
        var data = 'fubar';

        var result = fhir.validator.validate(data, schema);

        expect(result.valid).to.be.false;
    });
});