import { Component } from '@angular/core';
@Component({
  standalone:true, selector:'hc-meds',
  template: `
  <h2>Medications</h2>
  <div class="card" *ngFor="let m of meds">
    <b>{{m.name}}</b> — {{m.dose}}
    <div style="display:flex;justify-content:space-between;margin-top:8px">
      <span>Next: {{m.next}}</span><button>Mark taken</button>
    </div>
  </div>`
})
export class Meds {
  meds = [
    { name:'Aspirin', dose:'75mg', next:'8:00 PM' },
    { name:'Atorvastatin', dose:'10mg', next:'10:00 PM' }
  ];
}
