import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemActionsComponent } from './list-item-actions.component';
import { TasksMaterialModule } from '../../tasks.material.module';
import { MatDialog } from '@angular/material';
import { IfObservable } from 'rxjs/observable/IfObservable';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';


describe('ListItemActionsComponent', () => {
  let component: ListItemActionsComponent;
  let fixture: ComponentFixture<ListItemActionsComponent>;
  const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListItemActionsComponent],
      imports: [TasksMaterialModule],
      providers: [{
        provide: MatDialog,
        useValue: matDialogSpy
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.addNewListItem).toBeTruthy();
  });

  it('should open popup on pressing AddNewTask', () => {
    matDialogSpy.open.and.returnValue({ afterClosed: () => Observable.of({}) });
    component.addNewListItem();

    expect(matDialogSpy.open).toHaveBeenCalled;
  });
});
