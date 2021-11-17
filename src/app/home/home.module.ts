import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import {TableauComponent} from './tableau/tableau.component';

import { HomePageRoutingModule } from './home-routing.module';
import { IngredientsComponent} from './ingredients/ingredients.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TableauComponent, IngredientsComponent]
})
export class HomePageModule {}
