import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookingComponent } from './components/pages/booking/booking.component';
import { EditComponent } from './components/pages/edit/edit.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';



export const routes: Routes = [
{path:'home', component:HomeComponent},
{path:'booking', component:BookingComponent},
{path:'edit/:id', component:EditComponent},
{
    path: 'dashboard', component: DashboardComponent, children: [
      {path: 'stats', component: StatsComponent},
      {path: 'profile', component: ProfileComponent}
    ]
  },
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',redirectTo:'/home',pathMatch:'full'}];



