import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InventoryPeriod } from '../../interfaces/mar-reception.interface';
import { format, formatISO, parse } from "date-fns";

@Component({
  selector: 'app-mar-reception',
  templateUrl: './mar-reception.component.html',
  styleUrls: ['./mar-reception.component.css']
})
export class MarReceptionComponent implements OnInit {
  inventoryPeriod: InventoryPeriod = {
    id: '',
    startDate: undefined,
    endDate: undefined,
    reason: ''
  };
  formInventoryPeriod: FormGroup = new FormGroup({});
  autoTips: Record<string, Record<string, string>> = {
    en: {
      required: 'Input is required'
    },
  };

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
    this.loadData();
  }

  initForm() {
    this.formInventoryPeriod = this.fb.group({
      id: [this.inventoryPeriod.id],
      startDate: [this.inventoryPeriod.startDate, Validators.required],
      endDate: [this.inventoryPeriod.endDate, Validators.required],
      reason: [this.inventoryPeriod.reason],
    });
  }

  loadData(): void {
    let today = new Date();
    let startDateCtrl = this.formInventoryPeriod.controls['startDate']
    startDateCtrl.setValue(today);
    if(startDateCtrl.value){     
      startDateCtrl.disable();
    }    
    this.formInventoryPeriod.controls['reason'].setValue("Esta es la razon de prueba");
  }

  getData(): InventoryPeriod {
    let startDate = formatISO(
      this.formInventoryPeriod.controls['startDate'].value,
      { representation: 'complete' }
    )
    let endDate = formatISO(
      this.formInventoryPeriod.controls['endDate'].value,
      { representation: 'complete' }
    )

    return this.inventoryPeriod = {
      id: '1',
      startDate: startDate,
      endDate: endDate,
      reason: this.formInventoryPeriod.controls['reason'].value
    };
  }

  saveData(): void {
    if (!this.formInventoryPeriod.valid) {
      Object.values(this.formInventoryPeriod.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }
    console.log("data: ", this.getData());
  }

  // util date
  onChange(result: Date): void {
    console.log("onChange() => result: ", result);
    //TODO: Dos funciones para cambiar date format
    // console.log("onChange: ", format(result, 'dd-MM-yyyy'))
    // console.log("formatISO: ", formatISO(result, { representation: 'date' }))
  }

  disabledStartDate = (startValue: Date): boolean => {
    let endValue = this.formInventoryPeriod.controls['endDate'].value;    
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.getTime() > endValue.getTime();
  };

  disabledEndDate = (endValue: Date): boolean => {
    let startValue = this.formInventoryPeriod.controls['startDate'].value;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.getTime() <= startValue.getTime();
  };
}
