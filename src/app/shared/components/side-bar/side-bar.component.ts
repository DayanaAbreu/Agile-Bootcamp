import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthModule } from '@modules/auth/auth.module';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
    mainMenu: { //Quiere decir que tiene que contener un objeto por defecto
    defaultOptions: Array<any>, accessLink: Array<any> }//va a tener dos propiedades, defaultoptions y accesslink
    //A su vez, cada propiedad debe contener una lista de arrays
    //Así solo va a dar error en main Menu, hay que inicializarlo poniendo:
    = {defaultOptions: [], accessLink: []}

    adminOptions: Array<any> = []
    customOptions: Array<any> = []

    constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
      },
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
      
    ]

    this.adminOptions = [
      {
        name: 'Administración',
        icon: 'uil uil-chart',
        router: ['/', 'admin'],
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
  }

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}

