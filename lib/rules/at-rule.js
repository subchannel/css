'use strict';

module.exports = {
  'at-rule-empty-line-before': ['always', {
    except: ['blockless-after-same-name-blockless', 'first-nested']
  }],
  'at-rule-name-case': 'lower',
  'at-rule-name-newline-after': 'always-multi-line',
  'at-rule-name-space-after': 'always',
  'at-rule-no-unknown': [true, {
    ignoreAtRules: ['extend', 'if', 'for', 'each', 'while', 'mixin', 'include',
      'function', 'else', 'return']
  }],
  'at-rule-no-vendor-prefix': true,
  'at-rule-semicolon-newline-after': 'always'
};

// Rules not used:
// at-rule-blacklist
// at-rule-whitelist
