import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { clientReducers } from './client.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ClientEffects } from './client.effect';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ClientListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('featureClient', clientReducers),
    EffectsModule.forFeature([ClientEffects]),
    ClientRoutingModule,
    HttpClientModule,
  ],
})
export class ClientModule {}
