import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LibraryComponent } from "./library.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductSearchComponent } from "./product-search/product-search.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LibraryComponent,
    ProductItemComponent,
    ProductSearchComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [LibraryComponent],
})
export class LibraryModule {}
