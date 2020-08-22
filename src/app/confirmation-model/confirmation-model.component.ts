import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-model.component.html',
  styleUrls: ['./confirmation-model.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  modalInstance: NgbModalRef;

  constructor() { }

  ngOnInit() {
    
  }

  close(): void {
    this.modalInstance.close('no');
  }

  yes(): void {
    this.modalInstance.close('yes');
  }

}
