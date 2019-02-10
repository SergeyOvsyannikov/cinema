import {Component, HostBinding, OnInit} from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
})
export class DashboardComponent implements OnInit {

  @HostBinding('class.dashboard') css = true;

  constructor() { }

  ngOnInit() {}

}
