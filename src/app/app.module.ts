import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YunTopComponent } from './yun-top/yun-top.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatSliderModule,
  MatTooltipModule
} from "@angular/material";
import { YunNavComponent } from './yun-nav/yun-nav.component';
import { YunPicComponent } from './yun-pic/yun-pic.component';
import { YnuNewstitle1Component } from './ynu-newstitle1/ynu-newstitle1.component';
import { YnuNewstitle2Component } from './ynu-newstitle2/ynu-newstitle2.component';
import { YnuNews1Component } from './ynu-news1/ynu-news1.component';
import { YnuNews2Component } from './ynu-news2/ynu-news2.component';
import { YunNewstitle3Component } from './yun-newstitle3/yun-newstitle3.component';
import { YnuNewstitle4Component } from './ynu-newstitle4/ynu-newstitle4.component';
import { YnuNewstitle5Component } from './ynu-newstitle5/ynu-newstitle5.component';
import { YnuNews3Component } from './ynu-news3/ynu-news3.component';
import { YnuNews4Component } from './ynu-news4/ynu-news4.component';
import { YnuNews5Component } from './ynu-news5/ynu-news5.component';
import { YnuBottomComponent } from './ynu-bottom/ynu-bottom.component';
import { YnuFooterComponent } from './ynu-footer/ynu-footer.component';




@NgModule({
  declarations: [
    AppComponent,
    YunTopComponent,
    YunNavComponent,
    YunPicComponent,
    YnuNewstitle1Component,
    YnuNewstitle2Component,
    YnuNews1Component,
    YnuNews2Component,
    YunNewstitle3Component,
    YnuNewstitle4Component,
    YnuNewstitle5Component,
    YnuNews3Component,
    YnuNews4Component,
    YnuNews5Component,
    YnuBottomComponent,
    YnuFooterComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSliderModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

