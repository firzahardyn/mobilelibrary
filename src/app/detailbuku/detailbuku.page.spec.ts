import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailbukuPage } from './detailbuku.page';

describe('DetailbukuPage', () => {
  let component: DetailbukuPage;
  let fixture: ComponentFixture<DetailbukuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailbukuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailbukuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
