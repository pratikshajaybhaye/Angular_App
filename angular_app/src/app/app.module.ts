import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingAssignComponent } from './data-binding-assign/data-binding-assign.component';
import { OneWayComponentComponent } from './one-way-component/one-way-component.component';
import { TwowaycomponentComponent } from './twowaycomponent/twowaycomponent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TwoWayAssignComponent } from './two-way-assign/two-way-assign.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforsingerComponent } from './ngforsinger/ngforsinger.component';63
import { CustomDireDirective } from './custom-dire.directive';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AgeCalculatorComponent } from './age-calculator/age-calculator.component';
import { RapidapiComponent } from './rapidapi/rapidapi.component';
import { TodosComponent } from './todos/todos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormAssignmentComponent } from './reactive-form-assignment/reactive-form-assignment.component';
import { PipeComponent } from './pipe/pipe.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { AsyncpipeComponent } from './asyncpipe/asyncpipe.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { RegisterComponent } from './register/register.component';
import { WikipediaSearchComponent } from './wikipedia-search/wikipedia-search.component';
import { FilterassigPipe } from './pipes/filterassig.pipe';
import { HeadersInterceptor } from './headers.interceptor';
import { ResponseInterceptor } from './response.interceptor';
import { HooksComponent } from './hooks/hooks.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { GlobalerrorhandlerService } from './services/globalerrorhandler.service';
import { ErrorInterceptor } from './error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    DataBindingComponent,
    DataBindingAssignComponent,
    OneWayComponentComponent,
    TwowaycomponentComponent,
    TwoWayAssignComponent,
    ParentComponent,
    ChildComponent,
    NgifComponent,
    NgStyleComponent,
    NgClassComponent,
    NgforComponent,
    NgswitchComponent,
    NgforsingerComponent,
    CustomDireDirective,
    SimpleFormComponent,
    PasswordGeneratorComponent,
    ReactiveformComponent,
    AgeCalculatorComponent,
    RapidapiComponent,
    TodosComponent,
    ReactiveFormAssignmentComponent,
    PipeComponent,
    FilterPipe,
    FilterPipeComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    AsyncpipeComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    RegistrationFormComponent,
    LoginComponent,
    PostlistComponent,
    PostdetailsComponent,
    RegisterComponent,
    WikipediaSearchComponent,
    FilterassigPipe,
    HooksComponent,
    RxjsComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: GlobalerrorhandlerService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    console.log('AppModule called');
  }
}
