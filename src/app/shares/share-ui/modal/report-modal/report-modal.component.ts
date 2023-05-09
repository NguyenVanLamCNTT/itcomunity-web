import { Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.scss']
})
export class ReportModalComponent {
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
