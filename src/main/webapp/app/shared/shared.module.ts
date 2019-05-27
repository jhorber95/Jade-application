import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JadeApplicationSharedLibsModule, JadeApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JadeApplicationSharedLibsModule, JadeApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JadeApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JadeApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JadeApplicationSharedModule
    };
  }
}
