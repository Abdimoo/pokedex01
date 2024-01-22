import { CommonModule } from '@angular/common';
import { TypePokemon } from './../type-pokemon';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent {
filterType(arg0: string) {
throw new Error('Method not implemented.');
}

  @Input() type!: TypePokemon;
  dynamicBg:string = "linear-gradient(105deg,"+this.type.rgb+" 30px,#5A5A5A 31px,#5A5A5A)"
}
