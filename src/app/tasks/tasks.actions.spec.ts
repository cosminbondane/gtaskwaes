import { TestBed, inject } from '@angular/core/testing';

import { TasksActions } from './tasks.actions';

describe('GoogleTasksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksActions]
    });
  });

  it('should be created', inject([TasksActions], (service: TasksActions) => {
    expect(service).toBeTruthy();
  }));
});
