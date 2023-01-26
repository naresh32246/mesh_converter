import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeshConverterComponent } from './mesh-converter.component';

describe('MeshConverterComponent', () => {
  let component: MeshConverterComponent;
  let fixture: ComponentFixture<MeshConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeshConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeshConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
