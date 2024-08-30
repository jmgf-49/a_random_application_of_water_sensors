import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { StartComponent } from './components/start/start.component';
import { DevicesComponent } from './components/devices/devices.component';
import { ClientsComponent } from './components/clients/clients.component';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { StadisticsComponent } from './components/stadistics/stadistics.component';
import { ToolsComponent } from './components/tools/tools.component';
import { SettingsComponent } from './components/settings/settings.component';




export const routes: Routes = [
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component: StartComponent},
{path: 'devices', component: DevicesComponent},
{path: 'clients', component: ClientsComponent},
{path: 'users', component: UsersComponent},
{path: 'posts', component: PostsComponent},
{path: 'stadistics', component: StadisticsComponent},
{path: 'tools', component: ToolsComponent},
{path: 'settings', component: SettingsComponent},
];  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {};
