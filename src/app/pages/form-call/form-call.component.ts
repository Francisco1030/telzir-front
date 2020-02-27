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
  callsAux: Call[];

  constructor(private planService: PlanService,
              private callService: CallService) {
    this.getAllPlans();
    this.getAllCalls();
  }

  ngOnInit() {
  }

  getAllPlans() {
    this.planService.findAll().subscribe((plans: Plan[]) => {
      this.plans = plans;
    });
  }

  getAllCalls() {
    this.callService.findAll().subscribe((calls: Call[]) => {
      this.callsAux = calls;
    });
    console.log(this.callsAux);
  }

  onSubmit() {
    console.log(this.call);
    this.callService.calculatePrice(this.call).subscribe((resp) => {
      console.table(resp);
    });
  }

  findDestiny(event) {
    this.callService.findBySource(event.target.value).subscribe((calls: Call[]) => {
      this.calls = calls;
      console.log(this.calls);
    });
  }

}
