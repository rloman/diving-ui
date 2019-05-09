import { Component, OnInit } from '@angular/core';
import { SuitService } from 'src/app/services/suit.service';
import { Suit } from 'src/app/model/suit';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-suit-list',
  templateUrl: './suit-list.component.html',
  styleUrls: ['./suit-list.component.css']
})
export class SuitListComponent implements OnInit {

  private suits: Suit[];

  private subscription: Subscription;

  constructor(private suitService: SuitService) { }

  ngOnInit() {

    //Async
    this.subscription = this.suitService.list().subscribe( suits => {
      this.suits = suits;
    });
  }

}
