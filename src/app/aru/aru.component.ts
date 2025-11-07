import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { SalaryhufPipe } from '../shared/pipe/salaryhuf.pipe';

@Component({
  selector: 'app-aru',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe, DatePipe, SalaryhufPipe],
  templateUrl: './aru.component.html',
  styleUrl: './aru.component.css'
})
export class AruComponent {
  price = 35
  salary = 300
  isAdmin = false
  dateNow = new Date()
}
