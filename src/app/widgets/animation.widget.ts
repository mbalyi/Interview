import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-animation',
  template: `
    <div class="b-animation" #animation [style.height]="pHeight.toString()+'px'">
        <div *ngFor="let c of columns; let i = index;" class="column"
            [style.width]="width.toString()+'px'" [style.height]="(height * rowNo).toString()+'px'">
            <div *ngFor="let r of rows; let j = index" class="c-animation" [style.animation-delay]="(((i/10)+(j/10))/2).toString()+'s'"
                [style.width]="width.toString()+'px'" [style.height]="height.toString()+'px'">
            </div>
        </div>
    </div>
  `
})
export class AnimationWidget {
    @Input() pHeight: number = 400;
    @Input() pWidth: number = 400;
    @Input() rowNo: number = 23;
    @Input() columnNo: number = 40;

    public width: number = 4;
    public height: number = 4;

    public columns: number[] = [];
    public rows: number[] = [];

    ngOnInit() {
        this.columns = new Array(this.columnNo);
        this.rows = new Array(this.rowNo);
        this.width = Math.floor(this.pWidth / this.columnNo);
        this.height = Math.floor(this.pHeight / this.rowNo);
    }
}
