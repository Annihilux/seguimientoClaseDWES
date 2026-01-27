import { Component, signal } from '@angular/core';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RegisterComponent, LoginComponent],
  templateUrl: "./app.html",
  styleUrls: ["./app.scss"],
})


export class AppComponent {
  pantalla = signal<"reg" | "log">("reg");
  sesionIniciada = signal(false);

  registradoUser = signal("");
  registradoPass = signal("");

  guardarDatos(datos: { u: string; p: string }) {
    this.registradoUser.set(datos.u);
    this.registradoPass.set(datos.p);
    this.pantalla.set("log");
  }
}


// ng serve -o      PARA DESPLEGAR