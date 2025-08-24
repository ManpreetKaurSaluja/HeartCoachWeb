import { Component } from '@angular/core';
@Component({
  standalone:true, selector:'hc-vitals',
  template: `
  <h2>Vitals</h2>
  <div class="card"><h3>BP</h3><input placeholder="e.g., 118/76"/><button>Save</button></div>
  <div class="card"><h3>HR</h3><input placeholder="e.g., 72"/><button>Save</button></div>
  <h3>Recent</h3>
  <ul><li>BP 120/80 — today 10:00</li><li>HR 72 — today 09:50</li></ul>`
})
export class Vitals {

}
