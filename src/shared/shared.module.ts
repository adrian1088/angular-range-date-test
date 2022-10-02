import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule    
  ],
  exports:[
    NzCardModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    NzButtonModule
  ]
})
export class SharedModule { }
