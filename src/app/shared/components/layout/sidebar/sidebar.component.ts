import { Component, EventEmitter, HostListener, inject, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SidebarToggle } from '../../../models/sidebar-toggle.interface';
import { NavbarData, navbarData } from './nav-data.config';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  private readonly router = inject(Router);

  @Output() onToggleSideBar: EventEmitter<SidebarToggle> = new EventEmitter();

  collapsed: boolean = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideBar.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth
      });
    }
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideBar.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth
    });
  }

  getSidebarCollapsed() {
    return this.collapsed ? 'sidebar-collapsed' : ''
  }

  getActiveClass(data: NavbarData) {
    return this.router.url.includes(data.path) ? 'active' : '';
  }
}
