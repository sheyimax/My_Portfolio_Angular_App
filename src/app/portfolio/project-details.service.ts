import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() { }

 // fooddetails

 projectDetails = [
  {
    id:1,
    projectName:"Project Management Software Web Design",
    projectDetails:"Magna is a project management softwrae  design to be used by a wide range of industries to help plan, organize, manage resource tools and develop resource estimate for project planning, resource collation and scheduling for project manager and teams.",
    projectYear:2022,
    projectImg:"assets/images/magnaThumbnail.png"
  },
  {
    id:2,
    projectName:"Music Streaming & Player Mobile App",
    projectDetails:"Vibez is a music streaming mobile app and player suitable for listening to music, sharing songs to friends and family with unique features to solve the current listener struggle.",
    projectYear:2021,
    projectImg:"assets/images/MobileStreaming.png.png"
  },
  {
    id:3,
    projectName:"Double Exposure Photo Manipulation",
    projectDetails:"Using Adobe Photoshop and lightroom to create an inspirational design to talks about human beings imagination, focus and thoughts.",
    projectYear:2022,
    projectImg:"assets/images/project6.png.png"
  },
  {
    id:4,
    projectName:"Auth-wiki Authentication Library Web Design",
    projectDetails:"Auth-wiki is an authentication library website which provide all sorts of code for developer to use for their project",
    projectYear:2022,
    projectImg:"assets/images/thumbnailSize.png"
  },
  {
    id:5,
    projectName:"Citizen Reporting App",
    projectDetails:"A safety app which provides citizens an easy way to report and receive notifications regarding crime, accident and fire emergencies.",
    projectYear:2023,
    projectImg:"assets/images/"
  },
  {
    id:6,
    projectName:"Blog App",
    projectDetails:"This a blog app which allow user to post their news/blog and also browse latest release of blogs",
    projectYear:2023,
    projectImg:"assets/images/"
  }
]



}
