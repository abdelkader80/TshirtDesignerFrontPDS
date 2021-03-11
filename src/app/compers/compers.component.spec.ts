import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompersComponent } from './compers.component';

describe('CompersComponent', () => {
  let component: CompersComponent;
  let fixture: ComponentFixture<CompersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
