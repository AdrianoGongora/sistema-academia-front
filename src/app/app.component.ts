import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './shared/components/layout/sidebar/sidebar.component';
import { BodyComponent } from './shared/components/layout/body/body.component';
import { SidebarToggle } from './shared/models/sidebar-toggle.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sistema-Academia';

  isSidebarCollapsed = true;
  screeWidth = 0;
  
  onToggleSidebar(data: SidebarToggle) {
    this.screeWidth = data.screenWidth;
    this.isSidebarCollapsed = data.collapsed;
  }
}
