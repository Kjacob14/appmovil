import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
  standalone: false,
})
export class DatosPage implements OnInit {
  txt:string = ''
  lbl:string = ''

  constructor() { }

  ngOnInit() {
    console.log('el app se a iniciado')

    this.txt = localStorage.getItem('texto') || 'sin valores guardados aun'
  }

  guardar() {

    localStorage.setItem('texto', this.txt)
    this.lbl = this.txt

  }

  eliminar() {
    localStorage.removeItem('texto')
    this.lbl = localStorage.getItem('texto') || 'sin datos guardados aun'
  }

}
