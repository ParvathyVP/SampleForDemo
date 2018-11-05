import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  selectedItems=[];
  selectedItems1 = [1,2,3]
  itemModel;
  availableItems=[];
  some = "aaaaaaaaaa";
  sel;
itemMap = {};
count=1;
gst = 12;
finalAmount = 0;
finalAmountGst = 0;

  constructor() { }

  ngOnInit() {
    // try{
    //   window.fs.readFile('stocks.json', (err, data) => {
    //     console.log('in read fileeeeeee');
    //     console.log(err, data);
    //   //  this.availableItems = JSON.parse(data);
    //     if (err) {
    //       throw err
    //     };
    //     console.log('data >>>>> '+data);
    //   });
    // }catch(err){
    //   console.log(err);
      
    // }
 

   this.availableItems=[{
      "name" : "name123",
      "model" : "model12",
      "price":"100"
  },
  {
      "name" : "name456",
      "model" : "model22",
      "price":"500"
  }];

  this.availableItems.forEach(element => {
    this.itemMap[element.model] = element;
    this.itemModel = this.itemMap[0];
  });

  

  }
  addItems(){
    if(!this.selectedItems){
      this.selectedItems = [];
    } 
    console.log(this.itemModel)
    console.log(this.count)
    let count = this.count;
   
    let sel = this.itemMap[this.itemModel];
    let amount = this.count * sel.price;
    this.finalAmount = this.finalAmount + amount;
    console.log(this.finalAmount)
    this.finalAmountGst = this.finalAmount + ((this.finalAmount/100)*this.gst); 
    this.selectedItems.push({
      name : sel.name,
      model : sel.model,
      price: sel.price,
      qty : this.count,
      amount
    })
    console.log(JSON.stringify(this.selectedItems));
  //   console.log('in add itemssssssss'); 
    
  //   window.fs.writeFile("saample.txt", "Hey there!", function(err) {
  //     if(err) {
  //         return console.log(err);
  //     }
  
  //     console.log("The file was saved!");
  // }); 
  }

}
