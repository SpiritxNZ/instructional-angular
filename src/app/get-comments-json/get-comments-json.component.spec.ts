import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCommentsJsonComponent } from './get-comments-json.component';

describe('GetCommentsJsonComponent', () => {
  let component: GetCommentsJsonComponent;
  let fixture: ComponentFixture<GetCommentsJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCommentsJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCommentsJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
