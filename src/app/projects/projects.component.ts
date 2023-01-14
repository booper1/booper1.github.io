import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    loremIpsum: string = `This is just a sample of text, nothing much to see here. I hope you like it!`;

    projects: { title: string; summary: string; moreInfo: boolean }[] = [
        {
            title: "My Personal Portfolio",
            summary: `This website <i>is</i> my personal portfolio!
                    I've created this site to showcase a little bit of what I can do, and to share some things about myself.
                    I hope you like it!`,
            moreInfo: true
        },
        {
            title: "Running Key Cipher Tool",
            summary: this.loremIpsum,
            moreInfo: false
        },
        {
            title: "Medpace Training Tree",
            summary: this.loremIpsum,
            moreInfo: true
        }
    ];
}
