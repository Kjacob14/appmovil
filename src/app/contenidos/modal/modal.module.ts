import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';

import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    MatSlideToggle,
    MatButtonToggleModule,
    MatTabsModule

  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}

