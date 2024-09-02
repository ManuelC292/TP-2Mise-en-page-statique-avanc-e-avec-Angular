import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { ArticleComponent } from "../article/article.component";
import { AsideComponent } from "../aside/aside.component";
import { MainComponent } from "../main/main.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [NavComponent, ArticleComponent, AsideComponent, MainComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
