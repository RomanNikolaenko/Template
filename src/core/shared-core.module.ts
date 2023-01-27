import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
	declarations: [NotificationsComponent],
	imports: [modules],
	exports: [modules, NotificationsComponent],
	providers: []
})
export class SharedCoreModule {}
