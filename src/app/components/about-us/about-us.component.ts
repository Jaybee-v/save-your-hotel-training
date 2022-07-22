import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  title = 'Save Your Hotel';
  public workers: Team[] = [];
  public errMsg!: string;
  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeam().subscribe({
      next: (workers) => {
        this.workers = workers;
      },
      error: (err) => (this.errMsg = err),
    });
  }
}
