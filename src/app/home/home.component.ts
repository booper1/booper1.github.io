import { Component, OnInit } from '@angular/core';
import { stateManager } from '../app-controller';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    ngOnInit(): void {
        if (stateManager.main != null) {
            stateManager.main.scrollTop = 0;
        }
    }

    seasonCycle(): void {
        stateManager.season++;
        stateManager.season = stateManager.season % 4;
        stateManager.setSeasonTheme();
    }
}
