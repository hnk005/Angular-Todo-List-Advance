// highlight-on-route.directive.ts
import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appHighlightOnRoute]',
  standalone: false,
})
export class HighlightOnRouteDirective implements OnInit, OnDestroy {
  private routerSubscription: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    // Lắng nghe sự kiện NavigationEnd để kiểm tra khi router thay đổi
    this.routerSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRoute();
      });

    // Kiểm tra ngay khi directive được khởi tạo
    this.checkRoute();
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private checkRoute() {
    const currentRoute = this.router.url; // Lấy URL hiện tại từ Router

    // Kiểm tra nếu route hiện tại trùng với thuộc tính [appHighlightOnRoute]
    if (currentRoute === this.el.nativeElement.getAttribute('routerLink')) {
      this.renderer.addClass(this.el.nativeElement, 'bg-gray-300');
      this.renderer.removeClass(this.el.nativeElement, 'text-secondary');
      this.renderer.addClass(this.el.nativeElement, 'text-active');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'bg-gray-300');
      this.renderer.removeClass(this.el.nativeElement, 'text-active');
      this.renderer.addClass(this.el.nativeElement, 'text-secondary');
    }
  }
}
