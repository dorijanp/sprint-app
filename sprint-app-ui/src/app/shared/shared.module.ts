import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//primeng
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SharedService } from './shared.service';
@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [SharedService],
  exports: [
    InputTextModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
