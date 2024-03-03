import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dataArray: any[] = [];
  formData: any = { name: '', username: '', password: '' };
  selectedDataForUpdate: any = null;
  formHidden: boolean = true;
  btnHidden : boolean = false;
  updateButtonText : string = 'Add';
  // showUpdateButton: boolean = false; 

  toggleFormVisibility() {
    this.formHidden = !this.formHidden;
  }

  handleEditRequest(dataItem: any) {
    this.formData = {...dataItem};
    this.formHidden = false;
    this.updateButtonText = 'Submit';
    this.selectedDataForUpdate = { ...dataItem };
  }


  updateData(){
    this.formHidden= true;
    this.dataArray.push({ ...this.formData, id: this.dataArray.length + 1 })
    this.formData = {id:null,name:'', username: '', password: '' };
    this.updateButtonText = 'Submit';
  }


  updateListing(updatedData: any){
    this.btnHidden = true;
    const index = this.dataArray.findIndex(item => item.id === updatedData.id);
    if (index !== -1) {
          this.dataArray[index] = {...updatedData};
        }
    this.formHidden = true;
    this.formData = {id:null,name:'', username: '', password: '' };
  }
 
}
