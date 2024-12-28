import {Component, OnInit} from '@angular/core';
import Typed from 'typed.js'
import {gsap} from "gsap";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    const options = {
      strings: ['Desarrollador Web', 'Junior Full Stack', 'Diseñador UI/UX'],
      typeSpeed: 75,
      startDelay: 300,
      backSpeed: 65,
      smartBackspace: true,
      shuffle: false,
      backDelay: 1000,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };

    const typed = new Typed('.typed', options);

    gsap.to('.waveEmoji', {
      rotation: 30,
      transformOrigin: 'right bottom',
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: 'power1.inOut',
      repeatDelay: 0.3
    });

    gsap.fromTo('.movement',
      { autoAlpha: 0, x: -1000 },
      { autoAlpha: 1, x: -0, duration: 1 }
    )

  }

}
