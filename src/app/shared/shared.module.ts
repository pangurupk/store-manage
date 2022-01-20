import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MainNavigatorComponent } from './components/main-navigator/main-navigator.component';
import { SelectComponent } from './components/select/select.component';
import { SideNavigatorComponent } from './components/side-navigator/side-navigator.component';
import { ListDisplayComponent } from './components/list-display/list-display.component';

@NgModule({
  declarations: [
    MainNavigatorComponent,
    SelectComponent,
    SideNavigatorComponent,
    ListDisplayComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    MainNavigatorComponent,
    SelectComponent,
    SideNavigatorComponent,
    ListDisplayComponent,
  ],
})
export class SharedModule {}
