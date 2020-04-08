import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { WrapperComponent } from '../components';
import { QuerializeService } from '../services';

@Directive({
  selector: '[lbQuery]',
  providers: [QueryDirective],
})
export class QueryDirective {
  @Output('lbQueryOutput') output = new EventEmitter();
  _inputTpl: TemplateRef<any>;
  @Input('lbQueryInput') set inputTpl(value: TemplateRef<any>) {
    this.component.instance.inputTpl = value;
  }
  @Input('lbQuerySelector') set selectorTpl(value: TemplateRef<any>) {
    this.component.instance.selectorTpl = value;
  }
  @Input('lbQuery')
  set dataModel(value: any) {
    this.component.instance.dataModel = value;
    this.component.instance.content = this.template;
    this.component.instance.onSubmit = (val) => {
      const entries: Array<[string, any]> = Object.keys(val).map(
        (key) => <[string, any]>[key, val[key]]
      );
      return this.output.emit(this.service.parse(entries));
    };
  }

  component: ComponentRef<WrapperComponent>;

  constructor(
    private template: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private factory: ComponentFactoryResolver,
    private service: QuerializeService
  ) {
    this.component = this.vcr.createComponent(
      this.factory.resolveComponentFactory(WrapperComponent)
    );
  }
}
