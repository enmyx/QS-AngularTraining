import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


@NgModule({
  declarations: [SpinnerComponent],
  imports: [
    CommonModule,
    BlockUIModule,
    ProgressSpinnerModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    CardModule,
    CalendarModule,
    InputTextModule,
    TableModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
