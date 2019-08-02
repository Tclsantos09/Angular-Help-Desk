import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  image = '../../assets/Descubra-como-surgiu-o-erro-404.png';

  constructor() { }

  ngOnInit() {
  }

}
