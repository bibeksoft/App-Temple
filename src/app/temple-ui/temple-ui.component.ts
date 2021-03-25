import { Component,Input } from '@angular/core';
import { from } from 'rxjs';
import { TempleService } from '../temple-service.service';
@Component({
  selector: 'app-temple-ui',
  templateUrl: './temple-ui.component.html',
  styleUrls: ['./temple-ui.component.css']
})
export class TempleUIComponent {
  isShown=false;
  imageid:TempleService;
  constructor(private templedetails:TempleService) { }
  ReadMore(id:TempleService){
    this.isShown=true;
    this.imageid=id;
  }
  ngOnInit(): void {
  }
  template=this.templedetails.gettemplelist();



}
