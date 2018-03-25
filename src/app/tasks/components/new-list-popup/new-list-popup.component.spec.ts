import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListPopupComponent } from './new-list-popup.component';
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

xdescribe('NewListPopupComponent', () => {
  let component: NewListPopupComponent;
  let fixture: ComponentFixture<NewListPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListPopupComponent ],
      imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule]
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
});
