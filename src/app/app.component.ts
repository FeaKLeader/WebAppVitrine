import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    ReactiveFormsModule,
    LoginComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon Application';
}
