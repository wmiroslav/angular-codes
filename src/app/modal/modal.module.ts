import { CloseService } from './services/close.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { OpenModalDirective } from './directives/open-modal.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    OpenModalDirective
  ],
  entryComponents: [
    ModalComponent
  ],
  declarations: [
    ModalComponent,
    OpenModalDirective
  ]
})
export class ModalModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [CloseService]
    };
  }
}
