import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    public isActive: boolean = false;

    constructor() {
        this.checkScreenSize();

        window.addEventListener('resize', () => this.checkScreenSize());
    }

    activeMenu() {
        this.isActive = !this.isActive;
    }

    private checkScreenSize() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 500) {
            this.isActive = false;
        }
    }
}
