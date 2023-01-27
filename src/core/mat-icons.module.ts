import { CommonModule, isPlatformServer } from '@angular/common';
import { Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { IconModel } from 'src/interfaces/icon-model.models';

const ICONS = [
	{ iconName: 'logo' },
	{ iconName: 'refresh' }
]

@NgModule({
	imports: [
		CommonModule,
		MatIconModule
	],
	exports: [MatIconModule]
})

export class MatIconsModule {

	private icons: IconModel[] = ICONS;

	constructor(
		private readonly iconRegistry: MatIconRegistry,
		private readonly domSanitizer: DomSanitizer,
		@Inject(PLATFORM_ID) private readonly platformId: object
	) {
		for (const icon of this.icons) {
			this.registerSvgIcon(icon, 'svg');
		}
	}

	private registerSvgIcon(icon: IconModel, path: string) {
		if (isPlatformServer(this.platformId)) {
			this.iconRegistry.addSvgIconLiteral(icon.iconName, this.domSanitizer.bypassSecurityTrustHtml('<svg></svg>'));
		} else {
			this.iconRegistry.addSvgIcon(
				icon.iconName,
				this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/${path}/${icon.fileName ? icon.fileName : icon.iconName}.svg${icon.iconVersion ? `?ver=${icon.iconVersion}` : ''}`)
			);
		}
	}
}
