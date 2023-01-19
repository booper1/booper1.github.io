import { Component, OnInit } from '@angular/core';
import { stateManager } from '../app-controller';

@Component({
  selector: 'app-training-tree',
  templateUrl: './training-tree.component.html',
  styleUrls: ['./training-tree.component.scss']
})
export class TrainingTreeComponent implements OnInit {
    ngOnInit(): void {
        if (stateManager.main != null) {
            stateManager.main.scrollTop = 0;
        }
    }
}
