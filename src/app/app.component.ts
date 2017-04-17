import { Component } from '@angular/core';
import { CountdownService, countdownOptions, countdownData } from './countdown/countdown.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private format: string;
  private time: number;
  private theme: string;
  constructor(private _countdownService: CountdownService) {
    var countdownOptions: countdownOptions = {
      theme: 'bootstrap',
      format: "hh:mm:ss",
      onStart: (countdown: countdownData) => {
        console.log('count ' + countdown.timeInterval + ' has been started!');
      },
      onComplete: function (countdown: countdownData) {
        console.log('count ' + countdown.timeInterval + ' has been completed!');
      }
    }
    _countdownService.setCoundownOptions(countdownOptions);
  }
  onStart(countdown: countdownData) {
    console.log('countdown ' + countdown.object + ' has been started!');
  }
  onComplete(countdown: countdownData) {
    console.log('countdown ' + countdown.object + ' has been started!');
  }
}
