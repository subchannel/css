'use strict';

const atRule = require('./at-rule');
const block = require('./block');
const color = require('./color');
const comment = require('./comment');
const customMedia = require('./custom-media');
const customProperty = require('./custom-property');
const declarationBlock = require('./declaration-block');
const declaration = require('./declaration');
const fontFamily = require('./font-family');
const fontWeight = require('./font-weight');
const _function = require('./function');
const general = require('./general');
const keyframeDeclaration = require('./keyframe-declaration');
const _length = require('./length');
const mediaFeature = require('./media-feature');
const mediaQueryList = require('./media-query-list');
const number = require('./number');
const property = require('./property');
const rootRule = require('./root-rule');
const rule = require('./rule');
const selectorList = require('./selector-list');
const selector = require('./selector');
const shorthandProperty = require('./shorthand-property');
const string = require('./string');
const stylelintDisableComment = require('./styleline-disable-comment');
const time = require('./time');
const unit = require('./unit');
const valueList = require('./value');
const value = require('./value');

module.exports = Object.assign({}, atRule, block, color, comment, customMedia,
  customProperty, declarationBlock, declaration, fontFamily, fontWeight,
  _function, general, keyframeDeclaration, _length, mediaFeature,
  mediaQueryList, number, property, rootRule, rule, selectorList, selector,
  shorthandProperty, string, stylelintDisableComment, time, unit, valueList,
  value);
