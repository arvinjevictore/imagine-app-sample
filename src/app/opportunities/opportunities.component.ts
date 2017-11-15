import { Component, OnInit, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.css']
})
export class OpportunitiesComponent implements OnInit {
  
  opps : any;
  modal = {
  	name: "",
  	reg:"",
  	tech:"",
  	stat:""
   
  };   
  filterFlag = 0;
  posts: any;
  items: any;
  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  constructor(private dataService:DataService) { 

    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });

  	this.initializeItems();

  	this.items = [
    {
      name:'Juan Dela Cruz',
      img: 'https://cdn4.iconfinder.com/data/icons/democracy/500/Political_5-512.png',
      pos: 'President',
      email: 'president@accenture.com'
    },
   {
      name:'Richard Santos',
      img: 'http://www.iiam.com.my/wp-content/uploads/2015/12/4ibKz78KT.gif',
      pos: 'Vice President',
      email: 'vice.pres@accenture.com'
    },
    {
      name:'Maria Torres',
      img: 'http://svdphb.org/wp-content/uploads/2012/08/female-silouette.png',
      pos: 'Secretary',
      email: 'secretary@accenture.com'
    }
     ];
  }

  ngOnInit() {
  	this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["Data 1", "Data 2", "Data 3", "Data 4"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });
  }

 dataForModal(opp){
 	this.modal = {
  	name: opp.name,
  	reg:opp.reg,
  	tech:opp.tech,
  	stat:opp.stat

  };
 	console.log(this.modal);
 }

  //for search bar
 getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.forAddButton = 1;
      this.opps = this.opps.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.reg.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.tech.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.stat.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
      this.forAddButton = 0;
    }
  }

  initializeItems() {
    this.opps = [
    {
      name: '1st Opportunity',
      clientName: 'client123',
      class:'A+',
      wbs:'Opportunity 123-OPTY1233',
      reg: 'Region 1',
      tech: 'Technology 1',
      stat: 'Won'
    },
    {
      name: '2nd Opportunity',
      clientName: 'client123',
      class:'A+',
      wbs:'Opportunity 123-OPTY1233',
      reg: 'Region 2',
      tech: 'Technology 2',
      stat: 'Active'
    },
    {
      name: '3rd Opportunity',
      clientName: 'client123',
      class:'A+',
      wbs:'Opportunity 123-OPTY1233',
      reg: 'Region 3',
      tech: 'Technology 3',
      stat: 'Active' 
    },
    {
      name: '4th Opportunity',
      clientName: 'client123',
      class:'A+',
      wbs:'Opportunity 123-OPTY1233',
      reg: 'Region 4',
      tech: 'Technology 4',
      stat: 'Won'   
    },
    {
      name: '5th Opportunity',
      clientName: 'client123',
      class:'A+',
      wbs:'Opportunity 123-OPTY1233',
      reg: 'Region 1',
      tech: 'Technology 1',
      stat: 'Active'
    }
    ];
  }

  regFilter = '';
  techFilter = '';
  statFilter = '';
  saveFilter(){
    this.filterFlag = 1;

    this.opps = this.opps.filter((item) => {
          return (item.reg.toLowerCase().indexOf(this.regFilter.toLowerCase()) > -1 && item.tech.toLowerCase().indexOf(this.techFilter.toLowerCase()) > -1 && item.stat.toLowerCase().indexOf(this.statFilter.toLowerCase()) > -1 );
        })

    this.forAddButton = 1;
  }

  clearFilter(){
    this.filterFlag = 0;
    this.forAddButton = 0;
    this.initializeItems();
    // comment out if user doesn't want to save filters
    // this.regFilter = '';
    // this.techFilter = '';
    // this.statFilter = '';
  }

  validateFilter(){
    if (this.regFilter.length == 0 && this.techFilter.length == 0 && this.statFilter.length == 0) return true;
    
      return false;
    
  }

  crProjName = '';
  crRegion = '';
  crTechnology = '';
  crStatus = '';
  saveFlag = false;
  myData = {};
  saveRecord(){
    this.myData = 
    {    name: this.crProjName,
        reg: this.crRegion,
        tech: this.crTechnology,
        stat: this.crStatus
    };

    console.log(this.myData);
    this.opps.push(this.myData);
  }

  resetAddFields(){
    this.crProjName = '';
    this.crRegion = '';
    this.crTechnology = '';
    this.crStatus = '';
  }

  saveRecordValidate(){
    if (this.crProjName.length == 0 || this.crRegion.length == 0 || this.crTechnology.length == 0 || this.crStatus.length == 0) return true;
    
      return false;
    
  }

  forAddButton = 0;
  addButtonShow(){
    if (this.forAddButton == 0) return true;
    
      return false;
  }
}
