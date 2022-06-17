import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    RegistrationComponent
  ],
    imports: [
        CommonModule,
        RegistrationRoutingModule,
        MatFormFieldModule
    ]
})
export class RegistrationModule { }
