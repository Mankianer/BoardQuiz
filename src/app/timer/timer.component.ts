import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  startTime = 5;
  timeLeft = 0;
  interval: any;
  isStopped = true;

  constructor() { }

  ngOnInit(): void {
    this.timeLeft = this.startTime;
  }

  startTimer() {
    this.isStopped = false;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
    },1000)
  }

  pauseTimer() {
    this.isStopped = true;
    clearInterval(this.interval);
  }

  resetTimer() {
    this.pauseTimer();
    this.timeLeft = this.startTime;
  }

  pauseResumeTimer() {
    if(this.isStopped) {
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  }
}
