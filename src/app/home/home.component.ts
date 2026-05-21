import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  readings$: Observable<any[]>

  constructor(
    private store: Store<any>
  ) {

    this.readings$ = this.store.select('reading')

  }

  ngOnInit(): void {}

  onDrawerButtonTap(): void {

    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()

  }

}