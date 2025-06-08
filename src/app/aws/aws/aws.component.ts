import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeploymentComponent } from '../deployment/deployment.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aws',
  standalone: true,
  imports: [RouterModule,CommonModule,DeploymentComponent],
  templateUrl: './aws.component.html',
  styleUrl: './aws.component.scss'
})
export class AwsComponent {

}
