import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { LatestArticleComponent } from './latest-article/latest-article.component';
import { FeaturedArticleComponent } from './featured-article/featured-article.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleDetailsComponent,
    LatestArticleComponent,
    FeaturedArticleComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
  LatestArticleComponent
  ]
})
export class ArticlesModule {}
