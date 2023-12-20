import { ChangeDetectionStrategy, Component } from '@angular/core';
import {DockModule} from "primeng/dock";
import {NgOptimizedImage} from "@angular/common";
import {navbarConfig} from "@app/constants/navbar-config";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    DockModule,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  public readonly navbarConfig: MenuItem[] = navbarConfig;
}
