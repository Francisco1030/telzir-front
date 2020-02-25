import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { PlanService } from 'src/app/services/plan.service';
import { Plan } from 'src/app/models/plan';
import { Call } from 'src/app/models/call';

@Component({
  selector: 'app-form-call',
  templateUrl: './form-call.component.html',
  styleUrls: ['./form-call.component.css']
})
export class FormCallComponent implements OnInit {
  @Input() call: Call = <Call>{};
  //@Output() outputCall: EventEmitter<Call> = new EventEmitter();

  plans: Plan[];
  // form: FormGroup;

  constructor(private planService: PlanService, private formBuilder: FormBuilder) {
    this.getAllPlans();
  }

  ngOnInit() {

    // this.form = new FormGroup({
    //   source: new FormControl(null),
    //   destiny: new FormControl(null),
    //   time: new FormControl(null),
    //   plan: new FormControl(null),
    // });

    // this.form = this.formBuilder.group({
    //   source: ['Selecione'],
    //   destiny: ['Selecione'],
    //   time: [null],
    //   plan: ['Selecione'],
    // });
  }

  getAllPlans() {
    this.planService.findAll().subscribe((plans: Plan[]) => {
      this.plans = plans;
    });
  }

  onSubmit() {
    console.log(this.call);
  }

}
