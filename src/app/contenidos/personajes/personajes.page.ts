import { Component, OnInit, signal, inject} from '@angular/core';
import { RickService } from '../../services/rick-service';
import { Personaje } from '../../interfaces/rick-interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  standalone: false,
})
export class PersonajesPage implements OnInit {

  public listaPersonajes = signal<Personaje[]>([])

  private servicio = inject(RickService)

  ngOnInit() {
  }

  personajesSrvc() {
    //consumir el servicio de rick y morty
  this.servicio.getPersonajes().subscribe(
      {
        next:(res) => {
          //se realiza la accion
          console.log('informacion obtenida del servicio', res.results)
          this.listaPersonajes.set(res.results)
      },
        error:(err) => {
          console.error('Error al obtener personajes', err);
      },
        complete:() => {
          console.log('Solicitud completada');
      },
    }
    )
  }



}
