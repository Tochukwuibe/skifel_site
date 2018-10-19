import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, map } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    public minWidth$: Observable<boolean>;

    @ViewChild('header') header: ElementRef;
    @ViewChild('why') why: ElementRef;
    @ViewChild('plan') how: ElementRef;
    @ViewChild('demo') demo: ElementRef;
    @ViewChild('team') team: ElementRef;
    @ViewChild('contact') contact: ElementRef;

    constructor(
        private Ar: ActivatedRoute,
        private router: Router,
        private platform: Platform
    ) { }

    ngOnInit() {

        this.minWidth$ = of(this.platform.width())
            .pipe(
                map((val) => val < 576)
            );


        this.Ar.fragment.pipe(
            // delay(500),
            tap((frag) => this.scrollToView(frag))
        ).subscribe();


    }

    public navigate(fragment: string) {
        console.log('navigating to ', fragment);
        this.router.navigate(['/home'], { fragment });
    }



    private scrollToView(fragment: string) {
        console.log('scrolling into view', fragment);
        switch (fragment) {

            case 'header': {
                (this.header.nativeElement as Element).scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }

            case 'why': {
                (this.why.nativeElement as Element).scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }

            case 'plan': {
                (this.how.nativeElement as Element).scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }

            case 'demo': {
                (this.demo.nativeElement as Element).scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }


            case 'team': {
                (this.team.nativeElement as Element).scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }

            case 'contact': {
                (this.contact.nativeElement as Element).scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            }

        }
    }
}
