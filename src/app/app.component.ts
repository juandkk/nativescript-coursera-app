import { Component } from '@angular/core';

import {
  RouterExtensions
} from '@nativescript/angular';

import {
  RadSideDrawer,
  SlideInOnTopTransition
} from 'nativescript-ui-sidedrawer';

import {
  Application
} from '@nativescript/core';

import { firebase } from '@nativescript/firebase-core';

import {
  Messaging
} from '@nativescript/firebase-messaging';

import {
  Toasty
} from '@triniwiz/nativescript-toasty';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  sideDrawerTransition =
    new SlideInOnTopTransition();

  constructor(
    private routerExtensions: RouterExtensions
  ) {

    firebase()
      .initializeApp()
      .then(() => {

        console.log("Firebase inicializado");

        const messaging = new Messaging();

        messaging.getToken()
          .then((token: string) => {

            console.log("TOKEN FIREBASE:");
            console.log(token);

          });
        
        console.log("Escuchando notificaciones...");

        messaging.onMessage((message: any) => {

          console.log("Notificación recibida:");
          console.log(message);

          new Toasty({
            text:
              (message.notification?.title || "Notificación") +
              " - " +
              (message.notification?.body || ""),
          }).show();

        });

      })
      .catch((e: any) => {

        console.log("Error Firebase:", e);

      });

  }

  onNavItemTap(navItemRoute: string): void {

    this.routerExtensions.navigate(
      [navItemRoute],
      {
        clearHistory: true
      }
    );

    const sideDrawer =
      <RadSideDrawer>Application.getRootView();

    sideDrawer.closeDrawer();

  }

  isComponentSelected(
    navItemRoute: string
  ): boolean {

    return false;

  }

}