import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { NgxViacepModule } from '@brunoc/ngx-viacep'; // Importando o módulo

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgxViacepModule, // Registrando o módulo
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
