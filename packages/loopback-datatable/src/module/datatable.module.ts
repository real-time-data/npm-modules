import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { LoopbackDataTableComponent } from '../components';
import {
  CellPlaceholderDirective,
  CellRendererDirective,
} from '../directives';
import { RENDERERS } from '../renderers';
import { ColumnRendererConfig } from '../services';

@NgModule({
  imports: [CommonModule, MatTableModule, MatSortModule, CdkTableModule],
  declarations: [
    LoopbackDataTableComponent,
    CellPlaceholderDirective,
    CellRendererDirective,
    ...RENDERERS,
  ],
  entryComponents: RENDERERS,
  exports: [
    CommonModule,
    LoopbackDataTableComponent,
    CellPlaceholderDirective,
    CellRendererDirective,
  ],
  providers: [ColumnRendererConfig],
})
export class LoopbackDatatableModule {}
