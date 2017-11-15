import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-requests',
  templateUrl: './resource-requests.component.html',
  styleUrls: ['./resource-requests.component.css']
})
export class ResourceRequestsComponent implements OnInit {
  
  demands : any;
  projects = [
  {
  	client:"AMP",
  	engagement:"AMP Capital - SFDC",
  	project:"AMP Capital - SFDC",
  	interStyle:"Managed Delivery",
  },
  {
  	client:"AMP2",
  	engagement:"Woolworths Bunch 2.0",
  	project:"Woolworths Bunch 2.0",
  	interStyle:"Managed Delivery2",
  },
  {
  	client:"AMP3",
  	engagement:"Myer Visa Card Enhancements",
  	project:"Myer Visa Card Enhancements",
  	interStyle:"Managed Delivery3",
  }];

  constructor() { 
  	this.initializeItems();
  }

  initializeItems() {
    this.demands = [
    {
      rrdNo: 'UR222690',
      posStat: 'Open - New',
      project: 'Cloud First Applications - Google',
      position: 'QA',
      level: '12',
      location:'Manila'
    },
    {
      rrdNo: 'UR333690',
      posStat: 'Pending',
      project: 'Cloud First Applications - Salesforce',
      position: 'Program Control Services',
      level: '11',
      location:'Manila'
    },
    {
      rrdNo: 'UR444690',
      posStat: 'Pending',
      project: 'Cloud First Applications - Google',
      position: 'Front-End Developer',
      level: '12',
      location:'Manila'
    }
    ];
  }

  ngOnInit() {
  }

  srchprojName='';
  createDemandValidate(){
  	if (this.srchprojName.length == 0) return true;
    
      return false;
  }

  modal = {
  	demrrdNo: "",
  	demposStat:"",
  	demproject:"",
  	demposition:"",
  	demlevel:"",
  	demlocation:""
  };

  

dataForModal(demand){
 	this.modal = {
  	demrrdNo: demand.rrdNo,
  	demposStat:demand.posStat,
  	demproject:demand.project,
  	demposition:demand.position,
  	demlevel:demand.level,
  	demlocation:demand.location
  };
}

 demandData = {
  	client: "",
  	engagement:"",
  	project:"",
  	interStyle:""
  };
 i: any;
createDemand(){

	for(this.i=0; this.i<this.projects.length;this.i++){
		if(this.srchprojName == this.projects[this.i].project){
			this.demandData = {
		  	client: this.projects[this.i].client,
		  	engagement:this.projects[this.i].engagement,
		  	project:this.projects[this.i].project,
		  	interStyle:this.projects[this.i].interStyle
		  };
		}
	}
}


}