import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {
  @Input() action: string | undefined;
  @Input() title: string | undefined;
  @Input() content: string | undefined;

  constructor(private modalService: NgbModal,
    public activeModal: NgbActiveModal) { }

  closeModal(): void {
    this.modalService.dismissAll();
  }

  confirm(): void {
    this.activeModal.close(true);
  }
}
