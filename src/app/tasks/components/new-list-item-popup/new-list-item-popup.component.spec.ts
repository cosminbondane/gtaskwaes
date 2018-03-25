import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewListItemPopupComponent } from './new-list-item-popup.component';
import { MatDialog, MatDialogModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatDialogRef } from '@angular/material';
import { FormsModule } from '@angular/forms';

xdescribe('NewListPopupComponent', () => {
  let component: NewListItemPopupComponent;
  let fixture: ComponentFixture<NewListItemPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewListItemPopupComponent ],
      imports: [MatDialogModule, MatInputModule, MatButtonModule, MatFormFieldModule, FormsModule],
      providers: [MatDialogRef]
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
});
