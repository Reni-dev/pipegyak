import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { EmpfilterPipe } from "../shared/pipe/empfilter.pipe";
import Swal from "sweetalert2";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [ReactiveFormsModule, EmpfilterPipe],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  emplist = [
    {id: 1, name: "Teddy", city: "London", salary: 30},
    {id: 2, name: "Eperke", city: "Lekváros", salary: 25},
    {id: 3, name: "Málna", city: "Lekváros", salary: 26},
    {id: 4, name: "Soma", city: "Kerek Erdő", salary: 55},
    {id: 5, name: "Bean", city: "London", salary: 81},
    {id: 6, name: "Nodi", city: "Anglia", salary: 92},
    {id: 7, name: "KisVakond", city: "Földes Út", salary: 22},
    {id: 8, name: "Csali", city: "Tó Feneke", salary: 13},
  ]

  filteredCity = new FormControl('')
  filteredName = new FormControl('')
  filteredEmpList = this.emplist

  showFilters = false

  toggleFilter(){
    this.showFilters = !this.showFilters
  }

  showAlert(){
    // alert('ALERT')
    Swal.fire({
      icon: 'success',
      title: 'Mükszik',
      timer: 3000,
      showConfirmButton: false
    })
  }
}
