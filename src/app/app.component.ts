import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
  PoMenuPanelModule
} from '@po-ui/ng-components';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoMenuPanelModule,
    PoPageModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuItemSelected = 'teste'
  title = 'routing-app';
  constructor(private proAppConfigService: ProAppConfigService) {}


  menus: Array<PoMenuItem> = [
    { label: 'Contador', icon: 'an an-article', link: '/contador' },
    { label: 'Sair', action: this.onClick.bind(this), icon: 'po-icon-exit'  },
  ];

  private onClick(): void {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose(false);
    } else {
      alert('O App não está sendo executado dentro do Protheus.');
    }
  }
}
