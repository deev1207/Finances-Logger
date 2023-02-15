import { Component } from '@angular/core';
type data = Array<{ type: string; ToFrom: string;Details:string;Amount:string}>;
type data2 = Array<{ type: string; ToFrom: string;Details:string;Amount:string;index:number}>;

interface q{
  type: string; ToFrom: string;Details:string;Amount:string
}
interface d {
  info:q;
  index:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'finance-logger';
   bool:boolean=false;
   bool2:boolean=false;
   bool3:boolean=false;
   type!:string;
   ToFrom!:string;
   Details!:string;
   Amount!:string;
   index!:number;
   

   entries:data=[

  ]

  backup:data=[

  ]
  

  history:d[]=[

  ]



   add(){
    this.bool2=false;
    if( document.getElementById('add')!.innerHTML=='Add Edited Entry'){
      this.addEdited(this.index);
      document.getElementById('add')!.innerHTML='Add'
      
    }
    else{
      this.entries.splice(0,0,{type:this.type,ToFrom:this.ToFrom,Details:this.Details,Amount:this.Amount});
    }

        this.type="Invoice",
        this.ToFrom ="",
        this.Details="",
        this.Amount='';

  }
   
   delete(index:number){
    document.getElementById('Id'+index)!.style.background='red';
    this.bool=true;
    this.history.push({
      info:this.entries[index],
      index:index
});
    this.entries.splice(index,1);
    
   }
   remove(){
    this.bool2=true;
    this.backup= [...this.entries];
    console.log(this.backup);
    this.entries.splice(0,this.entries.length);
    console.log(this.backup);
    }

    edit(index:number){
      this.bool3=!this.bool3;
      console.log(index);
      console.log(document.getElementById('Id'+index));
      if(document.getElementById('Id'+index)!.style.color=='yellow'){
        document.getElementById('Id'+index)!.style.color='black'
      }
      else{
        document.getElementById('Id'+index)!.style.color='yellow'
      }
      this.type=this.entries[index].type,
      this.ToFrom =this.entries[index].ToFrom,
      this.Details=this.entries[index].Details,
      this.Amount=this.entries[index].Amount
      if(this.bool3===false){
        this.type="Invoice",
        this.ToFrom ="",
        this.Details="",
        this.Amount='';
      }
     
      
      this.index=index;
    }

    addEdited(index:number){
      document.getElementById('Id'+index)!.style.color='black';

      this.entries[index].type=this.type;
      this.entries[index].ToFrom=this.ToFrom;
      this.entries[index].Details=this.Details;
      this.entries[index].Amount=this.Amount;
      this.type="Invoice",
      this.ToFrom ="",
      this.Details="",
      this.Amount='';
}

click(){
  
}

undo(){

  this.entries.splice(this.history[0].index,0,this.history[0].info);
  this.history.splice(0,1);
  if(this.history.length==0){
      this.bool=false;
  }
}

undoAll(){
  
  this.entries= [...this.backup];
  this.bool2=false;

}

toggle(){
  
}

}
