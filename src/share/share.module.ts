import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { HttpClientModule } from '@angular/common/http';


// import { ConfirmCodeInputComponent } from './component/confirm-code-input/confirm-code-input.component';
// import { LoadingComponent } from './component/loading/loading.component';
// import { MobileNumberInputComponent } from './component/mobile-number-input/mobile-number-input.component';
// import { ValidationResultComponent } from './component/validation-result/validation-result.component';
// import { EmailInputComponent } from './component/email-input/email-input.component';


@NgModule({
  declarations: [
    // ValidationResultComponent,
    // LoadingComponent,
    // MobileNumberInputComponent,
    // ConfirmCodeInputComponent,
    // EmailInputComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    
  ],
  exports:[
    CommonModule,
    FormsModule,
    RouterModule,
    //ValidationResultComponent,
    //LoadingComponent,
    //MobileNumberInputComponent,
    //ConfirmCodeInputComponent,
    //EmailInputComponent,
  ],
  providers:[
    LocalStorageService
  ]
})
export class ShareModule { }
