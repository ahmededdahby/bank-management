import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPropsComponent } from './account-props.component';

describe('AccountPropsComponent', () => {
  let component: AccountPropsComponent;
  let fixture: ComponentFixture<AccountPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPropsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
