import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { WrapperComponent } from '../components';
import { QueryDirective } from '../directives';
import { LOOPBACK_QUERY_FN } from '../loopback-queryfn.config';
import { QUERY_FN } from '../queryfn.config';
import { QuerializeService } from '../services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  declarations: [WrapperComponent, QueryDirective],
  providers: [
    QuerializeService,
    { provide: QUERY_FN, useValue: LOOPBACK_QUERY_FN },
  ],
  entryComponents: [WrapperComponent],
  exports: [WrapperComponent, QueryDirective],
})
export class LoopbackQueryModule {}
