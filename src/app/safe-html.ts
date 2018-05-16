import { DomSanitizer } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'safeHtml'})

/**
 * @class SafeHtmlPipe
 * Class used as a pipe to trust the html
 */
export class SafeHtmlPipe implements PipeTransform  {

  /**
   * @constructor
   * @param sanitized The sanitized DOM
   */
  constructor(private sanitized: DomSanitizer) {}

  /**
   * Transform the HTML as trusted
   * @param value The html value
   */
  public transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
