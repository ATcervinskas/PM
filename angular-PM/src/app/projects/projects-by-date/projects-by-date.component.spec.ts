import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsByDateComponent } from './projects-by-date.component';

describe('ProjectsByDateComponent', () => {
  let component: ProjectsByDateComponent;
  let fixture: ComponentFixture<ProjectsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
