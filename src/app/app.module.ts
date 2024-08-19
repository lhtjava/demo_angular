import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// コンポーネント
import { TestApiComponent } from './components/test_api/test_api.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { TestServiceComponent } from './components/test-service/test-service.component';

// サービス
import { StorageService } from './services/storage.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TestPipePipe } from './pipes/test-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestApiComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TestServiceComponent,
    TestPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
