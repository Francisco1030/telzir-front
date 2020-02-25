import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { PlanService } from 'src/app/services/plan.service';
import { Plan } from 'src/app/models/plan';
import { Call } from 'src/app/models/call';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-form-call',
  templateUrl: './form-call.component.html',
  styleUrls: ['./form-call.component.css']
})
export class FormCallComponent implements OnInit {
  @Input() call: Call = <Call>{};

  plans: Plan[];
  calls: Call[];

  constructor(private planService: PlanService,
              private callService: CallService) {
    this.getAllPlans();
  }

  ngOnInit() {
  }

  getAllPlans() {
    this.planService.findAll().subscribe((plans: Plan[]) => {
      this.plans = plans;
    });
  }

  onSubmit() {
    console.log(this.call);
  }

  findDestiny(event) {
    this.callService.findBySource(event.target.value).subscribe((calls: Call[]) => {
      this.calls = calls;
      console.log(this.calls);
    });
  }

}
