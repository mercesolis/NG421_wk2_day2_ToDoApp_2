import { Component, OnInit } from '@angular/core';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirmation-model',
  templateUrl: './confirmation-model.component.html',
  styleUrls: ['./confirmation-model.component.css']
})
export class ConfirmationModelComponent implements OnInit {

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
