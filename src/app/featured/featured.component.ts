import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'Featured',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit {

  movieName!: string

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.movieName =
      this.route.snapshot.queryParams.name

  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

}