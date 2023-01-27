import { Component, OnInit } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FlyFromTheRight } from 'src/app/animations';
import { ErrorModel } from 'src/interfaces/error-handler.models';
import { ErrorHandlerService } from 'src/services/error-handler.service';

@UntilDestroy()
@Component({
	selector: 'notifications',
	templateUrl: './notifications.component.html',
	styleUrls: ['./notifications.component.scss'],
	animations: [FlyFromTheRight]
})
export class NotificationsComponent implements OnInit {
	protected displayNewUpdatesAvailable: boolean | undefined;

	private systemErrorTimeout: any;
	protected systemError?: any;

	constructor(
		private readonly errorHandlerSvc: ErrorHandlerService
	) {}

	ngOnInit(): void {
		this.errorHandlerSvc.displayErrorChanged$
			.pipe(untilDestroyed(this))
			.subscribe((error: ErrorModel) => {
				if (!this.systemErrorTimeout) {
					this.systemError = error;
				}

				this.systemErrorTimeout = setTimeout(() => {
					this.systemError = null;
					this.systemErrorTimeout = null;
				}, 10000);
			});
	}

	protected onRefreshPageClick() {
		window.location.reload();
	}
}