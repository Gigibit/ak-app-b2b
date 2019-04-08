
import { NgModule } from '@angular/core';
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
        FormsModule, 
        MatDialogModule,
        MatFormFieldModule, 
        MatButtonModule, 
        MatInputModule,
        MatDialogRef
    ]
})
export class MaterialModule {}