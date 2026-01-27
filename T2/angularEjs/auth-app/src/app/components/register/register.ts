import { Component, signal, computed, output } from '@angular/core';

@Component({
  selector: "app-register",
  standalone: true,
  templateUrl: "./register.html",
  styleUrls: ["./register.scss"],
})


export class RegisterComponent {
  user = signal("");
  pass = signal("");

  onRegister = output<{ u: string; p: string }>();

  userError = computed(() =>
    this.user().length > 0 && this.user().length < 3 ? "Muy corto" : null,
  );
  passError = computed(() =>
    this.pass().length > 0 && this.pass().length < 6
      ? "Mínimo 6 caracteres"
      : null,
  );

  formValido = computed(
    () => this.user().length >= 3 && this.pass().length >= 6,
  );

  enviarRegistro() {
    this.onRegister.emit({ u: this.user(), p: this.pass() });
  }
}