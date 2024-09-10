import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { getEsPaginatorIntl } from '../../../utils/es-paginator';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { DefaultService } from '../../../services/default.service';
import { TableColumns } from '../../../models/table-columns.interface';
import { MatTableDataSource, MatTableModule } from "@angular/material/table"
import { startWith, switchMap } from 'rxjs';
import Swal from 'sweetalert2';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-list-table',
  standalone: true,
  imports: [DatePipe,
    UpperCasePipe,
    NgClass,
    MatTableModule,
    MatIconModule,
    MatTooltip,
    MatPaginator],
  templateUrl: './list-table.component.html',
  styleUrl: './list-table.component.scss',
  providers: [
    {
      provide: MatPaginatorIntl,
      useValue: getEsPaginatorIntl(),
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline'
      } as MatFormFieldDefaultOptions
    }
  ]
})
export class ListTableComponent<T> implements OnInit, OnChanges, AfterViewInit {

  @Input() services!: DefaultService

  @Input() columns!: TableColumns<T>[];

  @Input() getInputs: string = "";

  @Output() rowClick = new EventEmitter<unknown>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  changesGetInputs = new EventEmitter<T>();
  dataSource = new MatTableDataSource<T>();

  visibleColumns!: Array<keyof T | string>;

  paginatorOptions = {
    pageSizeOptions: [10, 20, 50],
    pageSize: 10,
    pageLength: 0
  };

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['columns']) {
      this.setVisibleColumns();
    }

    if (changes['getInputs'] && this.paginator) {
      this.paginator.pageIndex = 0;
      this.changesGetInputs.emit();
    }

  }

  setVisibleColumns() {
    this.visibleColumns = this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  ngAfterViewInit(): void {
    this.getDataByService();
    this.paginatorChages();
  }

  async getDataByService() {
    this.changesGetInputs
      .pipe(startWith(""),
        switchMap(() => {
          return this.services.getAll(
            // this.paginator.pageSize,
            1,
            // this.paginator.pageIndex,
            10,
            this.getInputs
          )
        })).subscribe((data) => {
        console.log(data);
          this.setData(data);
        })
  }

  setData(data: any) {
    if (data.isSuccess) {
      this.setVisibleColumns();
      this.paginatorOptions.pageLength = data.value.totalCount
      this.dataSource.data = data.value.data
    } else {
      Swal.fire({
        title: 'Hubo un error!',
        text: data.message,
        icon: 'warning',
      })
    }
  }

  paginatorChages() {
    this.paginator.page.subscribe(() => {
      this.changesGetInputs.emit();
    })
  }

}
