import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

//Componenete de prueba
@Component({
  template: '<img class="testing-directiva" appImgBroken [src]="srckMock">'
})

class TestComponent {
  public srckMock: any = null
}

//TODO La prueba de ImgBroken es la siguiente

describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  //TODO Deberia instanciar correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('TestComponent debería instanciarse correctamente',() => {
    expect(component).toBeTruthy()
  })

  it('Directiva debería de cambiar la imagen por la png', (done: DoneFn) => {
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src //Tenemos la url antes de ser cambiada por la directiva
    component.srckMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = afterImgElement.src 
      expect(afterImgSrc).toEqual('/assets/images/image-broken.png')
      done()
    }, 3000)
  })

});