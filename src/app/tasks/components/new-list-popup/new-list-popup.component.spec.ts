import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListPopupComponent } from './new-list-popup.component';
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogRef } from '@angular/material';
import { TasksMaterialModule } from '../../tasks.material.module';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('NewListPopupComponent', () => {
  let component: NewListPopupComponent;
  let fixture: ComponentFixture<NewListPopupComponent>;
  const matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListPopupComponent ],
      imports: [TasksMaterialModule, FormsModule, NoopAnimationsModule],
      providers: [{ provide: MatDialogRef, useValue: matDialogRefSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewListPopupComponent);
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
