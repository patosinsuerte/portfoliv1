import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-slider',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.scss',
})
export class SliderComponent {
    activeIndex: number = 0;
    setPresentationIndex() {
        this.activeIndex = 0;
    }
    setAboutIndex() {
        this.activeIndex = 1;
    }
    setServiceIndex() {
        this.activeIndex = 2;
    }
    setProyectsIndex() {
        this.activeIndex = 3;
    }
}
