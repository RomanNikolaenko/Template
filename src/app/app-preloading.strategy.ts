import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';

@Injectable()
export class AppPreloadingStrategy implements PreloadingStrategy {

	constructor(
		private readonly activetedRoute: ActivatedRoute
	) {}

	public preload(route: Route, load: () => Observable<any>): Observable<any> {
		let preload = true;

		if (this.activetedRoute?.firstChild?.snapshot?.data?.['externalPage']) {
			preload = false;
		}

		if (route.data?.['preload'] != undefined) {
			preload = route.data['preload'];
		}

		return preload
			? load()
			: of(null);
	}
}
