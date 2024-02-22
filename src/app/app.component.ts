import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Form2Component } from './form2/form2.component';
import { Form1Component } from './form1/form1.component';
import { RegFormComponent } from './reg-form/reg-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Form2Component, Form1Component, RouterLink, RouterLinkActive, RegFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Route';

}
