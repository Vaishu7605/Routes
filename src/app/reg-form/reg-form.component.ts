import { Component } from '@angular/core';
import { Form1Component } from '../form1/form1.component';
import { Form2Component } from '../form2/form2.component';

@Component({
  selector: 'app-reg-form',
  standalone: true,
  imports: [Form1Component, Form2Component],
  templateUrl: './reg-form.component.html',
  styleUrl: './reg-form.component.css'
})
export class RegFormComponent {

}
