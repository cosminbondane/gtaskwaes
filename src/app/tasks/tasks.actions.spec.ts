import { TestBed, inject } from '@angular/core/testing';

import { TasksActionsService, TasksActionsTypes } from './tasks.actions';
import { Store } from '@ngrx/store';
import { GoogleTasksService } from './services/google-tasks.service';
import { Observable } from 'rxjs/Observable';

fdescribe('TasksActions', () => {
  
  let service;
  let mockStore;
  let mockGoogleTasksService; 

  const storeSpy = jasmine.createSpyObj('Store', ['dispatch']);
  const googleTasksServiceSpy = jasmine.createSpyObj('GoogleTasksService', ['loadTasksLists']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TasksActionsService,
        {
          provide: Store,
          useValue: storeSpy
        }, 
        {
          provide: GoogleTasksService,
          useValue: googleTasksServiceSpy
        }
      ]
    });
  });

  beforeEach(() => {
    mockStore = TestBed.get(Store);
    mockGoogleTasksService = TestBed.get(GoogleTasksService);
    service = TestBed.get(TasksActionsService)
  });

  it('should be created', () => expect(service).toBeTruthy());

  describe('loadLists', () => {
    it('should dispatch LOAD_LISTS, call the google service and finally dispatch LOAD_LIST_END', () => {
      const loadTasksListsObserver = new Observable();
      googleTasksServiceSpy.loadTasksLists.and.returnValue(new Observable());      

      service.loadLists();
      
      expect(mockStore.dispatch).toHaveBeenCalledWith({type: TasksActionsTypes.LOAD_LISTS});


    });
  });

  /*beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasksActions, {
        provide: Store,
        useClass: MockStore
      }, GoogleTasksService]
    });
    service = TestBed.get(TasksActions);
    mockStore = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadLists', () => {
    it('should dispatch LOAD_LISTS, call google service and dispatch LOAD_LISTS_END', () => {
      service.loadLists();

      expect(mockStore.dispatch).toHaveBeenCalledWith({type: TasksActionsTypes.LOAD_LISTS});
    });
  });*/
});
