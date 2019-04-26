import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],

})
export class AppComponent  {
  textString = 'London Kings Cross Station';
  stylePositions = [[3,3],[15,3]]; // Start position and length of sections to be styled

  styledTesxtWithFunction = '';
  styledText = '';
  styleText(string){
    let styledText= '';
    console.log(typeof(this.stylePositions));
    for (let i = 0; i < this.stylePositions.length; i++) { 
      if(i==0){
        styledText+=string.substring(0, this.stylePositions[i][0]);
      } else {
        styledText+=string.substring(this.stylePositions[i-1][0]+this.stylePositions[i-1][1],this.stylePositions[i][0]);
      }
      styledText+='<span style="color:#ff0000">'+string.substring(this.stylePositions[i][0],this.stylePositions[i][0]+this.stylePositions[i][1])+'</span>';
      
      if(i==this.stylePositions.length-1){
      styledText+=string.substring(this.stylePositions[i][0]+this.stylePositions[i][1],string.length);
      }
    }
    return styledText;
  }

}
