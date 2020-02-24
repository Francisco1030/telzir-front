import { Component, OnInit } from '@angular/core';

import { PlanService } from 'src/app/services/plan.service';
import { Plan } from 'src/app/models/plan';

@Component({
  selector: 'app-form-call',
  templateUrl: './form-call.component.html',
  styleUrls: ['./form-call.component.css']
})
export class FormCallComponent implements OnInit {

  plans: Plan[];

  constructor(private planService: PlanService) {
    this.getAllPlans();
  }

  ngOnInit() {}

  getAllPlans() {
    this.planService.findAll().subscribe((plans: Plan[]) => {
      this.plans = plans;
    });
  }

}
