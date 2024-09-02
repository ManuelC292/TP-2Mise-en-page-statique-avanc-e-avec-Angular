import { Component } from '@angular/core';
import { ArticleComponent } from "../article/article.component";
import { AsideContainerComponent } from "../aside-container/aside-container.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ArticleComponent, AsideContainerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
