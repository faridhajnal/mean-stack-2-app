/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './welcome.component';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
var renderType_WelcomeComponent_Host:import0.RenderComponentType = (null as any);
class _View_WelcomeComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _WelcomeComponent_0_4:import3.WelcomeComponent;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_WelcomeComponent_Host0,renderType_WelcomeComponent_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('app-welcome',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_WelcomeComponent0(this.viewUtils,this.injector(0),this._appEl_0);
    this._WelcomeComponent_0_4 = new import3.WelcomeComponent();
    this._appEl_0.initComponent(this._WelcomeComponent_0_4,[],compView_0);
    compView_0.create(this._WelcomeComponent_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.WelcomeComponent) && (0 === requestNodeIndex))) { return this._WelcomeComponent_0_4; }
    return notFoundResult;
  }
}
function viewFactory_WelcomeComponent_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_WelcomeComponent_Host === (null as any))) { (renderType_WelcomeComponent_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,[],{})); }
  return new _View_WelcomeComponent_Host0(viewUtils,parentInjector,declarationEl);
}
export const WelcomeComponentNgFactory:import9.ComponentFactory<import3.WelcomeComponent> = new import9.ComponentFactory<import3.WelcomeComponent>('app-welcome',viewFactory_WelcomeComponent_Host0,import3.WelcomeComponent);
const styles_WelcomeComponent:any[] = [];
var renderType_WelcomeComponent:import0.RenderComponentType = (null as any);
class _View_WelcomeComponent0 extends import1.AppView<import3.WelcomeComponent> {
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _text_5:any;
  _text_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_WelcomeComponent0,renderType_WelcomeComponent,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'div',(null as any));
    this.renderer.setElementAttribute(this._el_1,'class','col-md-8 col-md-offset-2');
    this._text_2 = this.renderer.createText(this._el_1,'\n        ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'p',(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'Welcome to the user stuff',(null as any));
    this._text_5 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_6 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._text_5,
      this._text_6
    ]
    ,[],[]);
    return (null as any);
  }
}
export function viewFactory_WelcomeComponent0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.WelcomeComponent> {
  if ((renderType_WelcomeComponent === (null as any))) { (renderType_WelcomeComponent = viewUtils.createRenderComponentType('C:/Users/Farid/Documents/angular2/messages-example/assets/app/auth/welcome.component.ts class WelcomeComponent - inline template',0,import8.ViewEncapsulation.None,styles_WelcomeComponent,{})); }
  return new _View_WelcomeComponent0(viewUtils,parentInjector,declarationEl);
}