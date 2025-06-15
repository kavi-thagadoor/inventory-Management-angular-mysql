import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddProdutComponent } from './edit-add-produt.component';

describe('EditAddProdutComponent', () => {
  let component: EditAddProdutComponent;
  let fixture: ComponentFixture<EditAddProdutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAddProdutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddProdutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
