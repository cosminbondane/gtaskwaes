import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListItemPopupComponent } from './new-list-item-popup.component';
import { FormsModule } from '@angular/forms';
import { TasksMaterialModule } from '../../tasks.material.module';
import { MatDialogRef } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NewListPopupComponent', () => {
  let component: NewListItemPopupComponent;
  let fixture: ComponentFixture<NewListItemPopupComponent>;
  const matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListItemPopupComponent ],
      imports: [TasksMaterialModule, FormsModule, NoopAnimationsModule],
      providers: [{ provide: MatDialogRef, useValue: matDialogRefSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListItemPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close modal if press No', () => {
    component.onNoClick();
    expect(matDialogRefSpy.close).toHaveBeenCalled;
  });
});
