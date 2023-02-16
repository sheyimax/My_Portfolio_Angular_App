import { Component } from '@angular/core';
import { ProjectDetailsService } from 'src/app/portfolio/project-details.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
     constructor(private service:ProjectDetailsService ){}
     projectData:any;
  ngOnInit(): void {
    this.projectData = this.service.projectDetails;

    }
}


