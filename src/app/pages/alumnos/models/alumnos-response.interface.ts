export interface AlumnoResponse {
    alumnoId: string;
    nombre: string;
    apellido: string;
    celular: string;
    dni: string;
    nivel: string;
    createdOnUtc: Date;
    icEdit: object;
    // icReport: object;
    icDelete: object;
}