import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [CommonModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})

export class UserCard {

  name = input.required<string>();
  age = input<number>(0);
  
  onGreet = output<string>();

  notificar() {

    this.onGreet.emit(`Hola desde el componente de ${this.name()}`);

  }

}
