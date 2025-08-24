import { Component } from '@angular/core';
@Component({
  standalone:true, selector:'hc-chat',
  template: `
  <h2>Messages</h2>
  <div class="box">
    <div class="msg in">👋 Hi! Log your BP with “BP 120/80”.</div>
    <div class="msg out">DONE</div>
  </div>
  <form style="display:flex;gap:8px">
    <input placeholder="Type a message"/>
    <button>Send</button>
  </form>`,
  styles: [`
    .box{height:60vh;overflow:auto;border:1px solid #eee;border-radius:var(--radius);padding:8px;margin-bottom:8px;background:#fff}
    .msg{max-width:80%;padding:8px 10px;border-radius:12px;margin:6px 0;background:#f6f6f6}
    .msg.out{margin-left:auto;background:#e6f3ff}
  `]
})
export class Chat {

}
