import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AwarenessPage } from './awareness.page';

describe('AwarenessPage', () => {
  let component: AwarenessPage;
  let fixture: ComponentFixture<AwarenessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwarenessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AwarenessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
