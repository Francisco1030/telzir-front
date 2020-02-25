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

  plans: Plan[];

  constructor(private planService: PlanService, private formBuilder: FormBuilder) {
    this.getAllPlans();
  }

  ngOnInit() {}

  getAllPlans() {
    this.planService.findAll().subscribe((plans: Plan[]) => {
      this.plans = plans;
    });
  }

  onSubmit() {
    console.log(this.call);
  }

}
