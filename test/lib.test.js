'use strict';

const assert = require('assert');
const lib = require('../lib');

describe('stylelint-config-subchannel', function () {
  it('exported lib should contain rules', function () {
    assert.ok('rules' in lib);
  });
});
