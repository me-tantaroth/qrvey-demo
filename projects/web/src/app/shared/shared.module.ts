import { NgModule } from '@angular/core';
import { ModalDirective } from './directives/modal.directive';

@NgModule({
  declarations: [ModalDirective],
  exports: [ModalDirective],
})
export class SharedModule {}
