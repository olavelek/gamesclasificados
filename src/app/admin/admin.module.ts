import { NgModule } from '@angular/core';
import { GCSharedModule } from '../shared/gcshared/gcshared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { CreateAdComponent } from './createad/createad.component';
import { MyAdsComponent } from './myads/myads.component';

@NgModule({
  imports: [
    GCSharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    UserComponent,
    CreateAdComponent,
    MyAdsComponent
    ]
})
export class AdminModule { }
