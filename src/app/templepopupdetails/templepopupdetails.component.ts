import { Component, OnInit,Input } from '@angular/core';
import {TempleService} from '../temple-service.service'


@Component({
  selector: 'app-templepopupdetails',
  templateUrl: './templepopupdetails.component.html',
  styleUrls: ['./templepopupdetails.component.css']
})
export class TemplepopupdetailsComponent implements OnInit {
  @Input() imageID:TempleService;
  constructor() { }
  ngOnInit(): void {
  }

}
