import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  standalone: true,
  imports: [],
  templateUrl: './dynamic-content.component.html',
  styleUrl: './dynamic-content.component.scss'
})
export class DynamicContentComponent implements OnInit {
  @Input() component: any;

  constructor(public viewContainerRef: ViewContainerRef) {}

  ngOnInit() {
    this.viewContainerRef.createComponent(this.component);
  }
}
