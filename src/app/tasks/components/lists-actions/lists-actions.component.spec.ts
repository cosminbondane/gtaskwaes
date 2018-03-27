import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsActionsComponent } from './lists-actions.component';
import { TasksMaterialModule } from '../../tasks.material.module';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';

describe('ListsActionsComponent', () => {
  let component: ListsActionsComponent;
  let fixture: ComponentFixture<ListsActionsComponent>;
  let matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListsActionsComponent],
      imports: [TasksMaterialModule],
      providers: [{
        provide: MatDialog,
        useValue: matDialogSpy
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open popup on pressing AddNewList', () => {
    matDialogSpy.open.and.returnValue({ afterClosed: () => Observable.of({}) });
    component.addNewList();
    
    expect(matDialogSpy.open).toHaveBeenCalled;
  });
});
