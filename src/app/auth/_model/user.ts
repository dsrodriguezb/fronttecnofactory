export interface User {
    id?: number;
    login?: string;
    password?: string;
    nombre?: string;
    habilitado?: string;
    correo?: string;
    fecha_creacion?: string;
    fecha_desactivado?: string | null;
    fecha_ultima_modificacion?: string | null;
    fecha_ultima_ingreso?: string | null;
    telefono?: string | null;
}
