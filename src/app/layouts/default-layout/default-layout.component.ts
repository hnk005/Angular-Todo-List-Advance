import { Component, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-default-layout',
  standalone: false,
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {
  readonly pageTitle: WritableSignal<string> = signal('');

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.route.firstChild;
          while (child?.firstChild) {
            child = child.firstChild;
          }
          return child?.snapshot.data['title'] ?? '';
        })
      )
      .subscribe((title) => {
        this.pageTitle.set(title);
      });
  }
}
