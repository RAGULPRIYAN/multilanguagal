import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'translateFallback'
})
export class MissingTranslationPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(key: string): string {
    const translation = this.translate.instant(key);
    return translation !== key ? translation : 'Translation missing';
  }
}