import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { AboutComponent } from './pages/about/about.component';
import { MyServicesComponent } from './pages/my-services/my-services.component';
import { ProyectsComponent } from './pages/proyects/proyects.component';
import { SliderComponent } from './components/slider/slider.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        HeaderComponent,
        PresentationComponent,
        AboutComponent,
        MyServicesComponent,
        ProyectsComponent,
        SliderComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {}
