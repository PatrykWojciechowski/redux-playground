import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './client-list/client-list.component';

@NgModule({
  declarations: [ClientListComponent],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
