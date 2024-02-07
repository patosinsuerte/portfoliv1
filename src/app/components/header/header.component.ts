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
    isActive: boolean = false;

    toggleMenu() {
        this.isActive = !this.isActive;
    }

    // Escucha el evento de cambio de tamaño de la pantalla
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        // Obtén el ancho de la ventana
        const screenWidth = event.target.innerWidth;

        // Cambia la propiedad isActive según el ancho de la pantalla
        if (screenWidth <= 530) {
            this.isActive = false;
        } else {
            this.isActive = true;
        }
    }
}
