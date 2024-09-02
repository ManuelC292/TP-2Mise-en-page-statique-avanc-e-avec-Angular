import { Component } from '@angular/core';
import { AsideComponent } from "../aside/aside.component";

@Component({
  selector: 'app-aside-container',
  standalone: true,
  imports: [AsideComponent],
  templateUrl: './aside-container.component.html',
  styleUrl: './aside-container.component.css'
})
export class AsideContainerComponent {

}
