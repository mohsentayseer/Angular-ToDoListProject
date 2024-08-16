import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChildComponent } from './first-child.component';

describe('FirstChildComponent', () => {
  let component: FirstChildComponent;
  let fixture: ComponentFixture<FirstChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
