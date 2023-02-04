import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found';

import { NotificationsComponent } from './components/notifications';
import { MatIconsModule } from './mat-icons.module';

const modules = [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule,
	MatIconsModule
];

@NgModule({
	declarations: [NotificationsComponent, NotFoundComponent],
	imports: [modules],
	exports: [modules, NotificationsComponent, NotFoundComponent],
	providers: []
})
export class SharedCoreModule {}
