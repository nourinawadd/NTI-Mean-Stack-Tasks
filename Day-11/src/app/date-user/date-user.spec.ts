import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateUser } from './date-user';

describe('DateUser', () => {
  let component: DateUser;
  let fixture: ComponentFixture<DateUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
