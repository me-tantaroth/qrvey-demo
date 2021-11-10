import { NgModule } from '@angular/core';
import { LoadEmojiDirective } from './directives/load-emoji.directive';
import { ModalDirective } from './directives/modal.directive';

@NgModule({
  declarations: [LoadEmojiDirective, ModalDirective],
  exports: [LoadEmojiDirective, ModalDirective],
})
export class SharedModule {}
