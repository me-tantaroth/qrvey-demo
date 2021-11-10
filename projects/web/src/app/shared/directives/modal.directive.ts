import {
  Directive,
  ElementRef,
  HostListener,
  Output,
  EventEmitter,
} from '@angular/core';

declare const u: any;

@Directive({
  selector: '[appModal]',
})
export class ModalDirective {
  @Output() onClose: EventEmitter<Event> = new EventEmitter<Event>();
  @HostListener('click', ['$event']) onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    const elem: HTMLElement = event.target as HTMLElement;

    if (u(elem).attr('class')?.indexOf('modal') >= 0) {
      console.log('Click', u(elem).attr('class').indexOf('modal'));
      this.onClose.emit(event);
    }

    return false;
  }

  constructor(private ref: ElementRef) {}
}
