export interface TableColumns<T> {
    index: number;
    label: string;
    cssLabel: string[];
    property: string;
    cssProperty: string[];
    type: 'text' | 'textAddress' | 'number' | 'datetime' | 'badge' | 'icon' | 'decimal';
    visible?: boolean;
    action?: string;
    sticky?: boolean;
    tooltip?: string;
    cssIcon?: string;
}