import { Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';

import { FormControl, FormGroup } from '@angular/forms';
import { VendorFormService } from 'src/app/services/vendor-form.services';
import { IVendor } from '../../../../types/ivendor';

@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.scss']
})
export class VendorFormComponent implements OnInit {

  type: string = "create";
  formTitle: string = "Vendor Details";
  disableInput: boolean = true;

  vendor: IVendor = {
    vendor_name: '',
    work_type: '',
    selection_method: '',
    vendor_phone: '',
    vendor_email: '',
    contact_fname: '',
    contact_lname: '',
    contact_phone: '',
    contact_email: '',
    notes:'',
  }

  constructor(private service: VendorFormService) { }


  ngOnInit(): void {

    switch(this.type){
      case "create":
        this.formTitle = "Create Vendor";
        this.disableInput = false;
        break;
      case "update":
        this.formTitle = "Create Vendor";
        this.disableInput = false;
        break;
      default:
        break;
    }
    console.log(this.formTitle);
  }

  vendorAction() {
    switch(this.type){
      case "create":
        console.log("create", this.vendor);
        break;
      case "update":
        console.log("create", this.vendor);
        break;
    }
  }

  change(event: any, property: string) {
    if (typeof event === "object") {
      switch(property) {
        case 'contract_phone':
          this.vendor.contact_phone = event.target.value;
          break;
        case 'vendor_name':
          this.vendor.vendor_name = event.target.value;
          break;
        case 'work_type':
          this.vendor.work_type = event.target.value;
          break;
        case 'selection_method':
          this.vendor.selection_method = event.target.value;
          break;
        case 'vendor_phone':
          this.vendor.vendor_phone = event.target.value;
          break;
        case 'vendor_emali':
          this.vendor.vendor_email = event.target.value;
          break;
        case 'contract_fname':
          this.vendor.contact_fname = event.target.value;
          break;
        case 'contract_lname':
          this.vendor.contact_lname = event.target.value;
          break;
        case 'contact_email':
          this.vendor.contact_email = event.target.values;
          break;
        case 'notes':
          this.vendor.notes = event.target.values;
          break;

      }
    }
    // validateVendor(this.vendor);
  }
}

