import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
  PoMenuPanelModule,
} from '@po-ui/ng-components';
@Component({
  selector: 'app-first',
  imports: [CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoMenuPanelModule,
    PoPageModule],
  templateUrl: './routines.component.html',
  styleUrl: './routines.component.css'
})
export class RoutinesComponent {
  menuItemSelected = 'Contador'
  nNivel = 6
  count = 0;

  action() {
    this.count++;
  }

}
