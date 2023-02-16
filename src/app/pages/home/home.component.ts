import { Component } from '@angular/core';
import { ProjectDetailsService } from 'src/app/portfolio/project-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
     constructor(private service:ProjectDetailsService ){}
     projectData:any;
  ngOnInit(): void {
    this.projectData = this.service.projectDetails;
  }
}
