import {Directive, ElementRef, OnInit} from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

@Directive({
  selector: '.animation-title, .animation-text, .animation-AboutUserImage'
})
export class AnimationDirective implements OnInit  {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;

    if (element.classList.contains('animation-title')) {
      gsap.from(element, {
        opacity: 0,
        y: -20,
        duration: 1
      });
    }

    if (element.classList.contains('animation-text')) {
      gsap.fromTo(element,
        { autoAlpha: 0, x: 1000 },
        { autoAlpha: 1, x: -0, duration: 1, delay: 0.7 }
      )
    }

    if (element.classList.contains('animation-AboutUserImage')) {
      gsap.from(element, {
        opacity: 0,
        y: 700,
        duration: 0.5
      });
    }

  }

}
