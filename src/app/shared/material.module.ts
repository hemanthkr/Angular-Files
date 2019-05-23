import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule, MatDividerModule, MatCardModule, MatExpansionModule } from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatToolbarModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
