import { Component, signal, input, output, computed } from '@angular/core';

@Component({
  selector: "app-login",
  standalone: true,
  templateUrl: "./login.html",
  styleUrls: ["./login.scss"],
})


export class LoginComponent {
  regUser = input.required<string>();
  regPass = input.required<string>();

  user = signal("");
  pass = signal("");
  error = signal("");

  onLoginSuccess = output<void>();

  intentarLogin() {
    if (this.user() === this.regUser() && this.pass() === this.regPass()) {
      this.error.set("");
      this.onLoginSuccess.emit();
    } else {
      this.error.set("Usuario o contraseña incorrectos");
    }
  }
}
