import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonModule } from '@collection-ui/button'
import { AuthComponent } from './auth.component'

describe('AuthComponent', () => {
  let component: AuthComponent
  let fixture: ComponentFixture<AuthComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [ButtonModule],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
