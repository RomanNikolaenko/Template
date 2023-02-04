import { Routes } from '@angular/router';
import { NotFoundComponent } from 'core/components/not-found';

export const routes: Routes = [
	{
		path: '**',
		component: NotFoundComponent
	}
];
