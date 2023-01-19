import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { stateManager } from './app-controller';
import { ProjectsComponent } from './projects/projects.component';
import { TrainingTreeComponent } from './training-tree/training-tree.component';

const routes: Routes = [
    { path: '', component: HomeComponent, title: stateManager.author + "'s Homepage" },
    { path: 'About', component: AboutComponent, title: "About " + stateManager.author },
    { path: 'Projects', component: ProjectsComponent, title: stateManager.author + "'s Projects" },
    { path: 'TrainingTree', component: TrainingTreeComponent, title: stateManager.author + "'s Projects" },
    { path: 'Home', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
