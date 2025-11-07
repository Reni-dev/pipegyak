import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AruComponent } from './aru/aru.component';
import { EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AruComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipegyak';
}
