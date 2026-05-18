import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'

import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  registerElement
} from '@nativescript/angular'

import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh'

import { SearchRoutingModule } from './search-routing.module'
import { SearchComponent } from './search.component'

registerElement(
  'PullToRefresh',
  () => PullToRefresh
)

@NgModule({
  imports: [
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    SearchRoutingModule,
  ],
  declarations: [
    SearchComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}