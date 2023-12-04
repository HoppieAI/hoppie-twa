import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  currentTitle: string | null = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.findMergedRouteData(this.activatedRoute.root, 'title'))
    ).subscribe(title => this.currentTitle = title);
  }

  private findMergedRouteData(route: ActivatedRoute, dataKey: string): any {
    let currentRoute: any = route;
    let dataValue = null;

    while (currentRoute) {
      dataValue = currentRoute.snapshot.data[dataKey] || dataValue;
      currentRoute = currentRoute.firstChild;
    }

    return dataValue;
  }
}
