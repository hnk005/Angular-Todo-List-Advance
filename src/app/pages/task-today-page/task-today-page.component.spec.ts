import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTodayPageComponent } from './task-today-page.component';

describe('TaskTodayPageComponent', () => {
  let component: TaskTodayPageComponent;
  let fixture: ComponentFixture<TaskTodayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskTodayPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTodayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
