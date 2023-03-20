import { Component, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// const linkifyHtml = require('linkify-html');

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }
  transform(value: any) {
    return this.sanitized.bypassSecurityTrustHtml(value);
    // const options = { defaultProtocol: 'https' };
    // const linkifiedValue = linkifyHtml(value, options);
    // return this.sanitized.bypassSecurityTrustHtml(linkifiedValue);
  }
}