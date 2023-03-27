import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentA } from './moduleA.component';
import { Lv2Component } from './lv2/lv2.component';
import { Lv3Component } from './lv2/lv3/lv3.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ComponentA },
      { path: 'lv2', component: Lv2Component },
      { path: 'lv3', component: Lv3Component },
    ])
  ],
  declarations: [ComponentA, Lv2Component, Lv3Component],
  exports: [ComponentA]
})
export class ModuleAModule { }
