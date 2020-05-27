import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPlayerStatus]'
})
export class PlayerStatusDirective implements OnInit {
  @Input() public appPlayerStatus: boolean;

  @HostBinding('style.color') public playerMarker: string;

  public ngOnInit(): void {
    if (this.appPlayerStatus) {
      this.playerMarker = 'red';
    } else {
      this.playerMarker = 'green';
    }
  }
}
