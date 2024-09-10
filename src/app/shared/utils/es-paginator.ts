import { MatPaginatorIntl } from "@angular/material/paginator";

const esRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
        return `0 de ${length}`;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    const endIndex =
        startIndex < length
            ? Math.min(startIndex + pageSize, length)
            : startIndex + pageSize;

    return `${startIndex + 1} - ${endIndex} de ${length}`;
};

export function getEsPaginatorIntl() {
    const paginatorIntl = new MatPaginatorIntl();

    paginatorIntl.itemsPerPageLabel = "Registro por pagina:";
    paginatorIntl.nextPageLabel = "Siguiente Pagina";
    paginatorIntl.previousPageLabel = "Pagina Anterior";
    paginatorIntl.firstPageLabel = "Primera pagina";
    paginatorIntl.lastPageLabel = "Ultima pagina";
    paginatorIntl.getRangeLabel = esRangeLabel;
}