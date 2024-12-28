import {AfterViewInit, Component} from '@angular/core';
import {PortfolioService} from "../../../services/portfolio.service";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {gsap} from "gsap";

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  projects: any[] = [];

  constructor(private _portfolioService: PortfolioService) {}

  ngAfterViewInit() {
    this._portfolioService.getProjects().subscribe((data) => {
      this.projects = data;
      console.log(data)

      this.initAnimations()
    });
  }

  private initAnimations(): void {

    setTimeout(() => {
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
          gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
        onEnterBack: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            overwrite: true,
          }),
        onLeaveBack: (batch) =>
          gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
      });

      ScrollTrigger.addEventListener('refreshInit', () =>
        void gsap.set('.card', { y: 0 })
      );

      ScrollTrigger.refresh();
    });
  }

}
