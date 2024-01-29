import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { TeamDetailsComponent } from './team-details/team-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TestComponent } from "./test/test.component";
import { FormsModule } from '@angular/forms';
import { LoginComponent } from "./login/login.component";

 
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginpageComponent, TeamDetailsComponent, MatIconModule, MatButtonModule, TestComponent, FormsModule, LoginComponent]
})
export class AppComponent {
  title = 'Angular_project';
}
