import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'

import {
  NativeScriptModule,
  NativeScriptHttpClientModule
} from '@nativescript/angular'

import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'

import { StoreModule } from '@ngrx/store'
import { readingReducer } from './store/reading.reducer'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  bootstrap: [AppComponent],

  imports: [
    AppRoutingModule,
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    NativeScriptHttpClientModule,

    StoreModule.forRoot({
      reading: readingReducer
    })
  ],

  declarations: [
    AppComponent
  ],

  schemas: [NO_ERRORS_SCHEMA],
})

export class AppModule {}