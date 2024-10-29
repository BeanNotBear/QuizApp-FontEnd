import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { deniedGuard } from './denied.guard';

describe('deniedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => deniedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
