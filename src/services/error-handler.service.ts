import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { ErrorModel } from '../interfaces/error-handler.models';

@Injectable({ providedIn: 'root' })
export class ErrorHandlerService {

	private displayErrorSource = new Subject<ErrorModel>();

	public displayErrorChanged$ = this.displayErrorSource.asObservable();

	private errorStack: any[] = [];

	private timeOut: any;

	public showError(message: string, error: any) {
		this.errorStack.push(error);
		if (!this.timeOut) {
			this.timeOut = setTimeout(() => {
				if (this.errorStack.length >= 10) {
					window.location.reload();
				}

				this.errorStack = [];
				clearTimeout(this.timeOut);
				this.timeOut = null;
			}, 3000);
		}

		this.displayErrorSource.next(<ErrorModel>{
			Text: message,
			ClientNumber: error.clientNumber
		});
	}
}
