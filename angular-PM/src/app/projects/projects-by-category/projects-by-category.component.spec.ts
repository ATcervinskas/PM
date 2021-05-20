import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsByCategoryComponent } from './projects-by-category.component';

describe('ProjectsByCategoryComponent', () => {
  let component: ProjectsByCategoryComponent;
  let fixture: ComponentFixture<ProjectsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
