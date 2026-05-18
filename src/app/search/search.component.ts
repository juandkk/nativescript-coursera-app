import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, isAndroid } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'
import { action } from '@nativescript/core/ui/dialogs'
import { Toasty } from '@triniwiz/nativescript-toasty'

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {

  searchText: string = ''
  showError: boolean = false

  movies = [
    {
      id: 1,
      name: 'Batman',
      category: 'Acción',
    },
    {
      id: 2,
      name: 'Spiderman',
      category: 'Aventura',
    },
  ]

  constructor(
    private routerExtensions: RouterExtensions
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

}