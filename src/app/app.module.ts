import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OpportunitiesComponent } from './opportunities/opportunities.component';
import { ResourceRequestsComponent } from './resource-requests/resource-requests.component';
import { ProjectsComponent } from './projects/projects.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { ResourcesComponent } from './resources/resources.component';
import { ReportsComponent } from './reports/reports.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { LeavesComponent } from './leaves/leaves.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './services/data.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OpportunitiesComponent,
    ResourceRequestsComponent,
    ProjectsComponent,
    TimesheetComponent,
    ResourcesComponent,
    ReportsComponent,
    MyTasksComponent,
    LeavesComponent,
    MyProfileComponent,
    MiscellaneousComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
    { path: '',
      component: HomeComponent
    },
    { path: 'home',
      component: HomeComponent
    },
    { path: 'opportunities',
      component: OpportunitiesComponent
    },
    { path: 'resourceRequests',
      component: ResourceRequestsComponent
    },
    { path: 'reports',
      component: ReportsComponent
    },
    { path: 'projects',
      component: ProjectsComponent
    },
    { path: 'resources',
      component: ResourcesComponent
    }
      ])
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
