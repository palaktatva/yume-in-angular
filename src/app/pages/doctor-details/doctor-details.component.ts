import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Swiper } from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { register } from 'swiper/element/bundle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { Navigation, Thumbs, } from 'swiper/modules';
Swiper.use([Navigation, Thumbs]);
@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
  ],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DoctorDetailsComponent implements AfterViewInit {
  currentIndex: number = 1;
  selectedValue: string;

  @ViewChild('locationSlider') locationSwiperRef!: ElementRef<
    HTMLElement & { swiper: Swiper; initialize: () => void }
  >;
  @ViewChild('photosandvideoSlider') photosAndVideoSwiperRef!: ElementRef<
    HTMLElement & { swiper: Swiper; initialize: () => void }
  >;
  @ViewChild('thubsslotslider') thubsslotsliderSwiperRef!: ElementRef<
    HTMLElement & { swiper: Swiper; initialize: () => void }
  >;
  @ViewChild('slotslider') slotsliderSwiperRef!: ElementRef<
    HTMLElement & { swiper: Swiper; initialize: () => void }
  >;

  @ViewChild('customNext', { read: ElementRef })
  customNext!: ElementRef;
  @ViewChild('customPrev', { read: ElementRef })
  customPrev!: ElementRef;



  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    let scrollposition = window.scrollY || document.documentElement.scrollTop;
    scrollposition = scrollposition + 400;
    const block: any = document.querySelectorAll('.block');
    block.forEach((section: HTMLElement) => {
      if (section.offsetTop <= scrollposition && section.offsetTop + section.offsetHeight > scrollposition) {
        let navLinks: any = document.querySelectorAll('.nav-listing a');
        navLinks.forEach((link: HTMLAnchorElement) => {
          if (link.href.includes(section.id)) {
            link.classList.add('active');
          }
          else {
            link.classList.remove('active');
          }
        });
      }
    });

  }

  private bindNavigationLinks() {
    const navLinks = document.querySelectorAll('.nav-listing a');
    navLinks.forEach((link) => {
      (link as HTMLAnchorElement).addEventListener('click', (event: Event) => {
        event.preventDefault();
        const targetId = (link as HTMLAnchorElement).getAttribute('href')?.substring(1);
        if (targetId) {
          this.scrollToSection(targetId);
        }
      });
    });
  }
  private scrollToSection(id: string) {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 200,
        behavior: 'smooth',
      });
    }
  }
  constructor() {
    register();
    this.selectedValue = 'option1';
  }

  config: SwiperOptions = {
    spaceBetween: '0',
    slidesPerView: 1,
    navigation: {
      nextEl: '.custom-next-location',
      prevEl: '.custom-prev-location',
    },
    on: {
      slideChange: (swiper: Swiper) => {
        this.currentIndex = swiper.activeIndex + 1;
      },
    },
  };

  config_2: SwiperOptions = {
    spaceBetween: '0',
    slidesPerView: 3,
    navigation: {
      nextEl: '.custom-next-photos',
      prevEl: '.custom-prev-photos',
    },
  };

  config_3: SwiperOptions = {
    spaceBetween: '0',
    slidesPerView: 4,
    // freeMode: true,
    navigation: {
      nextEl: '.custom-next-slot',
      prevEl: '.custom-prev-slot',
    },
  };

  config_4: SwiperOptions = {
    spaceBetween: 10,
    slidesPerView: 1,
  };

  ngAfterViewInit(): void {
    if (this.locationSwiperRef) {
      Object.assign(this.locationSwiperRef.nativeElement, this.config);
      // @ts-ignore
      this.locationSwiperRef.nativeElement.initialize();
    }

    if (this.photosAndVideoSwiperRef) {
      Object.assign(this.photosAndVideoSwiperRef.nativeElement, this.config_2);
      // @ts-ignore
      this.photosAndVideoSwiperRef.nativeElement.initialize();
    }

    if (this.thubsslotsliderSwiperRef) {
      Object.assign(this.thubsslotsliderSwiperRef.nativeElement, this.config_3);
      // @ts-ignore
      this.thubsslotsliderSwiperRef.nativeElement.initialize();
    }

    if (this.slotsliderSwiperRef) {
      Object.assign(this.slotsliderSwiperRef.nativeElement, this.config_4);
      // @ts-ignore
      this.slotsliderSwiperRef.nativeElement.initialize();
    }
    this.bindNavigationLinks();
  }
}
