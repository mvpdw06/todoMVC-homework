import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import InfoComponent from './info.component'
import HeaderComponent from './header.component'
import MainComponent from './main.component'
import FooterComponent from './footer.component'

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
