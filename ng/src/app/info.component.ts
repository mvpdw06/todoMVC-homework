import { Component } from '@angular/core'

@Component({
  selector: 'app-info',
  template: `
  <div class="info">
    <p>{{ descript }}</p>
    <p>{{ build }}</p>
  </div>
  `
})
export default class InfoComponent {
  descript = 'Double-click to edit a todo'
  build = 'Build by Ng'
}
