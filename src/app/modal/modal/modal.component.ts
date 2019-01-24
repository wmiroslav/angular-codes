import { CloseService } from './../services/close.service';
import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() body: TemplateRef<any>;
  @Input() title = 'Standard';
  @Output() dismiss = new EventEmitter<number>();
  @Input() hideEsc = true;
  @Input() context: any;

  constructor(private closeService: CloseService,
    private eventManager: EventManager) { }

  ngOnInit() {
    this.eventManager.addGlobalEventListener('window', 'keyup.esc', () => {
      if (this.hideEsc) {
        this.close();
      }
    });
  }


  close() {
    this.closeService.close();
    this.dismiss.emit(); // testing...
  }

  prevent($event) {
    $event.stopPropagation();
    $event.preventDefault();
  }

}


