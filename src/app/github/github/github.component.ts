import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProcessComponent } from '../process/process.component';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [RouterModule,CommonModule,ProcessComponent],
  templateUrl: './github.component.html',
  styleUrl: './github.component.scss'
})
export class GithubComponent {

}
