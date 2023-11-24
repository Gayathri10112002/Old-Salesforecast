import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


const embedConfig = {
  type: 'powerbi',
  id: '<your-powerbi-id>',
  embedUrl: '<your-powerbi-embed-url>',
  accessToken: '<your-access-token>'
};


@Component({
  selector: 'app-powerbi',
  templateUrl: './powerbi.component.html',
  styleUrls: ['./powerbi.component.css']
})
export class PowerbiComponent implements OnInit {
  public labels: string[] = [];
  public datas: number[] = [];
    chartData: any = [];
    metrics: any=[];
  

constructor(private auth:AuthService,private http: HttpClient, private router: Router,private route: ActivatedRoute){}


ngOnInit(): void {
  

}
}