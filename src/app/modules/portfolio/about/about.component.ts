import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit  {

  activeTab: string = 'technicalSkills';

  itemsSkills = [
    { imageUrl: '/assets/icons/html.png', title: 'HTML', subtitle: 'Avanzado' },
    { imageUrl: '/assets/icons/css-3.png', title: 'CSS', subtitle: 'Avanzado' },
    { imageUrl: '/assets/icons/js.png', title: 'JavaScript', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/typescript.png', title: 'TypeScript', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/python.png', title: 'Python', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/php.png', title: 'Php', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/tailwind.png', title: 'Tailwind Css', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/gsap.svg', title: 'Gsap', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/bootstrap.png', title: 'Bootstrap', subtitle: 'Avanzado' },
    { imageUrl: '/assets/icons/angular.png', title: 'Angular', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/react.png', title: 'React', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/node.png', title: 'Node', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/mysql.png', title: 'Mysql', subtitle: 'Intermedio' },
  ];

  itemsTools = [
    { imageUrl: '/assets/icons/git.png', title: 'Git', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/github.png', title: 'Github', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/webstorm.png', title: 'WebStorm', subtitle: 'IDE utilizado' },
    { imageUrl: '/assets/icons/aws.png', title: 'Amazon W. S.', subtitle: 'Intermedio' },
    { imageUrl: '/assets/icons/docker.png', title: 'Docker', subtitle: 'Intermedio' },
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.initAnimations();
  }

  changeTab(tab: string): void {
    this.activeTab = tab;
    this.cdr.detectChanges()
    this.initAnimations()
  }

  private initAnimations(): void {

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    gsap.defaults({ ease: 'power3' });
    gsap.set('.card', { y: 100 });

    ScrollTrigger.batch('.card', {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: { each: 0.15, grid: [1, 3] },
          overwrite: true,
        }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 1, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
        }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 1, y: 100, overwrite: true }),
    });

    ScrollTrigger.addEventListener('refreshInit', () =>
      void gsap.set('.card', { y: 0 })
    );

    ScrollTrigger.refresh();
  }

}
