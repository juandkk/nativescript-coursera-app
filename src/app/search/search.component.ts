import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, isAndroid } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'
import { action } from '@nativescript/core/ui/dialogs'
import { Toasty } from '@triniwiz/nativescript-toasty'
import { MovieService } from '../services/movie.service'
import * as ApplicationSettings from '@nativescript/core/application-settings'


@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  searchText: string = ''
  showError: boolean = false

  movies: any[] = []
  favorites: any[] = []

 constructor(
  private routerExtensions: RouterExtensions,
  private movieService: MovieService
  ) {}

  ngOnInit(): void {

    if (isAndroid) {
      console.log('Solo Android')
    }

  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  goDetail(item: any): void {

    this.routerExtensions.navigate(
      ['/featured'],
      {
        queryParams: {
          name: item.name,
        },
      }
    )

  }

  async selectCategory(item: any): Promise<void> {

    const result = await action(
      'Selecciona categoría',
      'Cancelar',
      ['Acción', 'Drama', 'Comedia']
    )

    if (result !== 'Cancelar') {

      item.category = result

      new Toasty({
        text: 'Categoría actualizada',
      }).show()

    }

  }

  refreshList(args: any): void {

    this.movies.push({
      id: this.movies.length + 1,
      name: 'Nueva película ' + this.movies.length,
      category: 'Random',
    })

    args.object.refreshing = false

    new Toasty({
      text: 'Listado actualizado',
    }).show()

  }

  doubleTap(): void {

    new Toasty({
      text: 'Double tap detectado',
    }).show()

  }

  validateText(): void {

    this.showError = this.searchText.length < 3

    if (this.showError) {

      new Toasty({
        text: 'Mínimo 3 caracteres',
      }).show()

    }

  }

  searchMovies(): void {

  this.movieService
    .searchMovies(this.searchText)
    .subscribe((data: any) => {

      this.movies = data

    })

  }

addFavorite(movie: any): void {

  if (!movie) {
    return
  }

  this.favorites.push(movie)

  ApplicationSettings.setString(
    'favorites',
    JSON.stringify(this.favorites)
  )

  new Toasty({
    text: 'Agregado a favoritos',
  }).show()

  }
}