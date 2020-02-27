import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { PlanService } from 'src/app/services/plan.service';
import { Plan } from 'src/app/models/plan';
import { Call } from 'src/app/models/call';
import { CallService } from 'src/app/services/call.service';
import { ModalResultComponent } from '../modal-result/modal-result.component';

@Component({
  selector: 'app-form-call',
  templateUrl: './form-call.component.html',
  styleUrls: ['./form-call.component.css']
})
export class FormCallComponent implements OnInit {

  constructor(private planService: PlanService,
              private callService: CallService,
              private modalService: NgbModal) {
    this.getAllPlans();
    this.getAllCalls();
  }
  @Input() call: Call = <Call>{};

  plans: Plan[];
  calls: Call[];
  callsAux: Call[];

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
    this.callService.calculatePrice(this.call).subscribe((call: Call) => {
      const modalRef = this.modalService.open(ModalResultComponent);
      //call.totalPrice.
      //call.totalPricePlan.toLocaleString('pt-BR');
      modalRef.componentInstance.call = call;
      console.table(call);
    });
  }

  openModal() {
    const modalRef = this.modalService.open(ModalResultComponent);
  }

  findDestiny(event) {
    this.callService.findBySource(event.target.value).subscribe((calls: Call[]) => {
      this.calls = calls;
      console.log(this.calls);
    });
  }

}
