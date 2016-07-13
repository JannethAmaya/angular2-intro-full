/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {Menon} from './menon';

describe('Menon', () => {
  it('should create an instance', () => {
    expect(new Menon()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let menon = new Menon({
      name: 'Yesenia',
      gender: 'F'
    });
    expect(menon.name).toEqual('Yesenia');
    expect(menon.gender).toEqual('F');
  });
});
