import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { clientReducers } from './client.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClientEffects } from './client.effect';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [ClientListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('featureClients', clientReducers),
    EffectsModule.forFeature([ClientEffects]),
    ClientRoutingModule,
  ],
})
export class ClientModule {}