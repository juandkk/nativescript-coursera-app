import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { Store } from '@ngrx/store'

import * as ApplicationSettings from '@nativescript/core/application-settings'

@Component({
  selector: 'Browse',
  templateUrl: './browse.component.html',
})
export class BrowseComponent implements OnInit {

  favorites: any[] = []

  constructor(
    private store: Store<any>
  ) {}

  ngOnInit(): void {

    const favoritesStorage = ApplicationSettings.getString(
      'favorites',
      '[]'
    )

    this.favorites = JSON.parse(favoritesStorage)

  }

  onDrawerButtonTap(): void {

    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()

  }

  readNow(item: any): void {

    this.store.dispatch({
      type: '[Reading] Add',
      movie: item
    })

  }

}