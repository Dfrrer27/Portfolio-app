import { Component, HostListener } from '@angular/core';
import { gsap } from 'gsap';
import { routes } from '../../../modules/portfolio/portfolio-routing.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isNavOpen = false;

  public menuItems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path)
    .filter((route) => !route.path?.includes('**'));

  changeNav() {
    this.isNavOpen = !this.isNavOpen;

    if (this.isNavOpen) {
      this.openMenuAnimation();
    } else {
      this.closeMenuAnimation();
    }
  }
  openMenuAnimation() {
    gsap.fromTo(
      '.animation-menu',
      { opacity: 0, y: -200 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }

  // Animación para cerrar el menú
  closeMenuAnimation() {
    gsap.to('.animation-menu', { opacity: 0, y: -200, duration: 1 }).then(() => {
      this.isNavOpen = false;
    });
  }

  // Detectar clics fuera del menú
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    const target = event.target as HTMLElement;

    const isInsideMenu = target.closest('.animation-menu');
    const isHamburgerButton = target.closest('button[aria-label="navigation"]');

    if (!isInsideMenu && !isHamburgerButton && this.isNavOpen) {
      this.closeMenuAnimation();
    }
  }

  @HostListener('document:touchstart', ['$event'])
  handleTouchOutside(event: Event) {
    this.handleClickOutside(event);
  }
}
