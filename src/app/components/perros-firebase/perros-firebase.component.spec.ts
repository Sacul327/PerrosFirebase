import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerrosFirebaseComponent } from './perros-firebase.component';

describe('PerrosFirebaseComponent', () => {
  let component: PerrosFirebaseComponent;
  let fixture: ComponentFixture<PerrosFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerrosFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerrosFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
