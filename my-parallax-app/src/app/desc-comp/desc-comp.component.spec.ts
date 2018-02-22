import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescCompComponent } from './desc-comp.component';

describe('DescCompComponent', () => {
  let component: DescCompComponent;
  let fixture: ComponentFixture<DescCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
