import { Component, OnInit } from '@angular/core';
import { SuitService } from 'src/app/services/suit.service';
import { Suit } from 'src/app/model/suit';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-suit-show',
  templateUrl: './suit-show.component.html',
  styleUrls: ['./suit-show.component.css']
})
export class SuitShowComponent implements OnInit {

  private suit: Suit;

  constructor(private suitService: SuitService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];

    this.suitService.findById(id).subscribe(suit => {
      console.log(suit);
      this.suit = suit;
    })
  }
}
