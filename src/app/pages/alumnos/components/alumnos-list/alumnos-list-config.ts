import { TableColumns } from "../../../../shared/models/table-columns.interface";
import { AlumnoResponse } from "../../models/alumnos-response.interface";

const tableColumns: TableColumns<AlumnoResponse>[] = [
    {
        index: 0,
        label: 'Nombre',
        cssLabel: ['font-bold', 'text-sm'],
        property: 'name',
        cssProperty: ['font-semibold', 'text-sm', 'text-sm', 'text-left'],
        type: 'text',
        sticky: true,
        visible: true
    },
    {
        index: 1,
        label: 'Apellido',
        cssLabel: ['font-bold', 'text-sm'],
        property: 'apellido',
        cssProperty: ['font-semibold', 'text-sm', 'text-sm', 'text-left'],
        type: 'textAddress',
        sticky: false,
        visible: true
    },
    {
        index: 2,
        label: 'Celular',
        cssLabel: ['font-bold', 'text-sm'],
        property: 'celular',
        cssProperty: ['font-semibold', 'text-sm', 'text-sm', 'text-left'],
        type: 'textAddress',
        sticky: false,
        visible: true
    },
    {
        index: 3,
        label: 'Dni',
        cssLabel: ['font-bold', 'text-sm'],
        property: 'dni',
        cssProperty: ['font-semibold', 'text-sm', 'text-sm', 'text-left'],
        type: 'textAddress',
        sticky: false,
        visible: true
    },
    {
        index: 4,
        label: 'Nivel',
        cssLabel: ['font-bold', 'text-sm'],
        property: 'nivel',
        cssProperty: ['font-semibold', 'text-sm', 'text-sm', 'text-left'],
        type: 'textAddress',
        sticky: false,
        visible: true
    },
    {
        index: 5,
        label: 'F. de Creacion',
        cssLabel: ['font-bold', 'text-sm'],
        property: 'createdOnUtc',
        cssProperty: ['font-semibold', 'text-sm', 'text-sm', 'text-left'],
        type: 'datetime',
        sticky: false,
        visible: true
    },

    {
        index: 6,
        label: '',
        cssLabel: [],
        property: 'icEdit',
        cssProperty: [],
        type: 'icon',
        sticky: false,
        visible: true
    },
    {
        index: 7,
        label: '',
        cssLabel: [],
        property: 'icReport',
        cssProperty: [],
        type: 'icon',
        sticky: false,
        visible: true
    },
    {
        index: 8,
        label: '',
        cssLabel: [],
        property: 'icDelete',
        cssProperty: [],
        type: 'icon',
        sticky: false,
        visible: true
    },
]

export const componentSetting = {
    tableColumns
}