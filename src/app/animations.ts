import { trigger, transition, style, animate } from '@angular/animations';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const FlyFromTheRight = trigger('flyFromTheRight', [
	transition('void => *', [
		style({ transform: 'translateX(100%)', opacity: 0 }),
		animate('0.4s cubic-bezier(0.42, 0, 0.58, 1)', style({ transform: 'translateX(0)', opacity: 1 }))
	]),
	transition('* => void', [
		style({ transform: 'translateX(0)', opacity: 1 }),
		animate('0.4s cubic-bezier(0.42, 0, 0.58, 1)', style({ transform: 'translateX(100%)', opacity: 0 }))
	])
]);
