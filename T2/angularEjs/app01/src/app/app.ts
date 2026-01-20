import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from './components/contador/contador';
import { UserCard } from './components/user-card/user-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador, UserCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {

  my_title = "Mi primer angular";

  userName = signal('Pepe');

  nombre1o2 = false;

  cambiarNombre() {

    if(!this.nombre1o2) {

      this.userName.set('Juan');
      this.nombre1o2 = true;

    }
    else if(this.nombre1o2) {

      this.userName.set('Pepe');
      this.nombre1o2 = false;
      
    }

    // this.userName.set('Juan');
    
  }

  manejarSaludo(mensaje : String) {

    alert(mensaje);

  }

}
