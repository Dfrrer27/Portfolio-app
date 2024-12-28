import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {gsap} from "gsap";
import {routes} from "../../modules/portfolio/portfolio-routing.module";

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent implements OnInit {

  @ViewChild('cursor', { static: true }) cursorRef!: ElementRef<HTMLDivElement>;

  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter( route => route && route.path )
    .filter( route => !route.path?.includes('**') )

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    const cursor = this.cursorRef.nativeElement;

    // Verifica si el dispositivo es táctil
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice || !cursor) {
      return;
    }

    // Evento para manejar el movimiento del mouse
    this.renderer.listen(window, 'mousemove', (e: MouseEvent) => {
      const { target, clientX: x, clientY: y } = e;
      const isTargetLinkOrBtn =
        (target as HTMLElement)?.closest('a') ||
        (target as HTMLElement)?.closest('button');

      gsap.to(cursor, {
        x: x + 3,
        y: y + 3,
        duration: 0.7,
        ease: 'power4',
        opacity: isTargetLinkOrBtn ? 0.6 : 1,
        scale: isTargetLinkOrBtn ? 3.5 : 1,
      });
    });

    // Evento para manejar cuando el cursor sale de la página
    this.renderer.listen(document, 'mouseleave', () => {
      gsap.to(cursor, {
        duration: 0.7,
        opacity: 0,
      });
    });
  }
}
