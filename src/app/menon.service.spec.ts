/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MenonService } from './menon.service';

describe('Menon Service', () => {
  beforeEachProviders(() => [MenonService]);

  it('should ...',
      inject([MenonService], (service: MenonService) => {
    expect(service).toBeTruthy();
  }));
});
