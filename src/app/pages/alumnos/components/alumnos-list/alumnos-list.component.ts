import { Component, inject, OnInit } from '@angular/core';
import { ListTableComponent } from '../../../../shared/components/reusables/list-table/list-table.component';
import { AlumnosService } from '../../services/alumnos.service';
import { componentSetting } from './alumnos-list-config';

@Component({
  selector: 'app-alumnos-list',
  standalone: true,
  imports: [ListTableComponent],
  templateUrl: './alumnos-list.component.html',
  styleUrl: './alumnos-list.component.scss'
})
export class AlumnosListComponent implements OnInit {

  component: any;

  public readonly _alumnoService = inject(AlumnosService);

  ngOnInit(): void {
    this.component = componentSetting;
  }


}
