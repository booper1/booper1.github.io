import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTreeComponent } from './training-tree.component';

describe('TrainingTreeComponent', () => {
  let component: TrainingTreeComponent;
  let fixture: ComponentFixture<TrainingTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
