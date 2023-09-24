import {
  isBoolean,
  isNull,
  isNumber,
  isString,
  isUndefined,
  isFunction,
  isArray,
  isObject,
} from '../index';

describe('Type Validation', () => {
  describe('isBoolean', () => {
    test('true', () => {
      expect(isBoolean(true)).toBe(true);
    });

    test('false', () => {
      expect(isBoolean(false)).toBe(true);
    });

    test('non-boolean', () => {
      expect(isBoolean('true')).toBe(false);
      expect(isBoolean([1, 2, 3])).toBe(false);
      expect(isBoolean(new Date())).toBe(false);
      expect(isBoolean(new Error())).toBe(false);
      expect(isBoolean({ a: 1 })).toBe(false);
      expect(isBoolean(/x/)).toBe(false);
      expect(isBoolean('a')).toBe(false);
      expect(isBoolean(null)).toBe(false);
      expect(isBoolean(undefined)).toBe(false);
      expect(isBoolean(1)).toBe(false);
      expect(isBoolean(NaN)).toBe(false);
      expect(isBoolean(Symbol('symbol'))).toBe(false);
    });
  });

  describe('isNumber', () => {
    test('numbers', () => {
      expect(isNumber(1)).toBe(true);
      expect(isNumber(0)).toBe(true);
      expect(isNumber(-2)).toBe(true);
      expect(isNumber(5)).toBe(true);
    });

    test('NaN', () => {
      expect(isNumber(NaN)).toBe(true);
    });

    test('non-numbers', () => {
      expect(isNumber('true')).toBe(false);
      expect(isNumber([1, 2, 3])).toBe(false);
      expect(isNumber(true)).toBe(false);
      expect(isNumber(false)).toBe(false);
      expect(isNumber(new Date())).toBe(false);
      expect(isNumber(new Error())).toBe(false);
      expect(isNumber({ a: 1 })).toBe(false);
      expect(isNumber(/x/)).toBe(false);
      expect(isNumber('a')).toBe(false);
      expect(isNumber(null)).toBe(false);
      expect(isNumber(undefined)).toBe(false);
      expect(isNumber(Symbol('symbol'))).toBe(false);
    });
  });

  describe('isString', () => {
    test('strings', () => {
      expect(isString('hello')).toBe(true);
      expect(isString('')).toBe(true);
      expect(isString('1234')).toBe(true);
    });

    test('non-string', () => {
      expect(isString([1, 2, 3])).toBe(false);
      expect(isString(true)).toBe(false);
      expect(isString(false)).toBe(false);
      expect(isString(new Date())).toBe(false);
      expect(isString(new Error())).toBe(false);
      expect(isString({ a: 1 })).toBe(false);
      expect(isString(/x/)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString(1)).toBe(false);
      expect(isString(NaN)).toBe(false);
      expect(isString(Symbol('symbol'))).toBe(false);
    });
  });

  describe('isNull', () => {
    test('null', () => {
      expect(isNull(null)).toBe(true);
    });

    test('undefined', () => {
      expect(isNull(undefined)).toBe(false);
    });

    test('non-null', () => {
      expect(isNull('true')).toBe(false);
      expect(isNull([1, 2, 3])).toBe(false);
      expect(isNull(true)).toBe(false);
      expect(isNull(false)).toBe(false);
      expect(isNull(new Date())).toBe(false);
      expect(isNull(new Error())).toBe(false);
      expect(isNull({ a: 1 })).toBe(false);
      expect(isNull(/x/)).toBe(false);
      expect(isNull('a')).toBe(false);
      expect(isNull(undefined)).toBe(false);
      expect(isNull(1)).toBe(false);
      expect(isNull(NaN)).toBe(false);
      expect(isNull(Symbol('symbol'))).toBe(false);
    });
  });

  describe('isUndefined', () => {
    test('undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });

    test('null', () => {
      expect(isUndefined(null)).toBe(false);
    });

    test('non-undefined', () => {
      expect(isUndefined('true')).toBe(false);
      expect(isUndefined([1, 2, 3])).toBe(false);
      expect(isUndefined(true)).toBe(false);
      expect(isUndefined(false)).toBe(false);
      expect(isUndefined(new Date())).toBe(false);
      expect(isUndefined(new Error())).toBe(false);
      expect(isUndefined({ a: 1 })).toBe(false);
      expect(isUndefined(/x/)).toBe(false);
      expect(isUndefined('a')).toBe(false);
      expect(isUndefined(null)).toBe(false);
      expect(isUndefined(1)).toBe(false);
      expect(isUndefined(NaN)).toBe(false);
      expect(isUndefined(Symbol('symbol'))).toBe(false);
    });
  });

  describe('isArray', () => {
    test('array', () => {
      expect(isArray([])).toBe(true);
      expect(isArray([1, 2])).toBe(true);
      expect(isArray([1])).toBe(true);
      expect(isArray(new Array(3))).toBe(true);
      expect(isArray(Array(3))).toBe(true);
      expect(isArray(Array.from({ length: 10 }, (_, i) => i))).toBe(true);
    });

    test('non-array', () => {
      expect(isArray(true)).toBe(false);
      expect(isArray(false)).toBe(false);
      expect(isArray('true')).toBe(false);
      expect(isArray(new Date())).toBe(false);
      expect(isArray(new Error())).toBe(false);
      expect(isArray({ a: 1 })).toBe(false);
      expect(isArray(/x/)).toBe(false);
      expect(isArray('a')).toBe(false);
      expect(isArray(null)).toBe(false);
      expect(isArray(undefined)).toBe(false);
      expect(isArray(1)).toBe(false);
      expect(isArray(NaN)).toBe(false);
      expect(isArray(Symbol('symbol'))).toBe(false);
      expect(isArray(new Uint8Array(32))).toBe(false);
    });
  });

  describe('isFunction', () => {
    test('function declarations', () => {
      function identity(x) {
        return x;
      }
      expect(isFunction(identity)).toBe(true);
    });

    test('arrow functions', () => {
      const identity = x => {
        return x;
      };
      expect(isFunction(identity)).toBe(true);
    });

    test('non-function', () => {
      expect(isFunction(true)).toBe(false);
      expect(isFunction(false)).toBe(false);
      expect(isFunction('true')).toBe(false);
      expect(isFunction([1, 2, 3])).toBe(false);
      expect(isFunction(new Date())).toBe(false);
      expect(isFunction(new Error())).toBe(false);
      expect(isFunction({ a: 1 })).toBe(false);
      expect(isFunction(/x/)).toBe(false);
      expect(isFunction('a')).toBe(false);
      expect(isFunction(null)).toBe(false);
      expect(isFunction(undefined)).toBe(false);
      expect(isFunction(1)).toBe(false);
      expect(isFunction(NaN)).toBe(false);
      expect(isFunction(Symbol('symbol'))).toBe(false);
    });
  });

  describe('isObject', () => {
    test('object literals', () => {
      function Foo(value) {
        this.value = value;
      }

      expect(isObject({})).toBe(true);
      expect(isObject({ a: 1 })).toBe(true);
      expect(isObject({ constructor: Foo })).toBe(true);
    });

    test('object without prototype', () => {
      expect(isObject(Object.create(null))).toBe(true);
    });

    test('class instance', () => {
      class Foo {
        value;

        constructor(value) {
          this.value = value;
        }
      }

      expect(isObject(new Foo(1))).toBe(false);
    });

    test('function instance', () => {
      function Foo(value) {
        this.value = value;
      }

      expect(isObject(new Foo(1))).toBe(false);
    });

    test('non-plain objects', () => {
      expect(isObject(true)).toBe(false);
      expect(isObject(false)).toBe(false);
      expect(isObject('true')).toBe(false);
      expect(isObject([1, 2, 3])).toBe(false);
      expect(isObject(new Date())).toBe(false);
      expect(isObject(new Error())).toBe(false);
      expect(isObject(/x/)).toBe(false);
      expect(isObject('a')).toBe(false);
      expect(isObject(null)).toBe(false);
      expect(isObject(undefined)).toBe(false);
      expect(isObject(1)).toBe(false);
      expect(isObject(NaN)).toBe(false);
      expect(isObject(Symbol('symbol'))).toBe(false);
      expect(isObject(new Set())).toBe(false);
      expect(isObject(new Map())).toBe(false);
    });
  });
});
