/**
 * Estructura de errores devueltos por el servidor.
 * Contiene detalles técnicos para logging y mensajes amigables para el usuario.
 */
export type ServerError = {
    /** Código HTTP del error */
    statusCode: number;
    /** Mensaje técnico del error */
    message: string;
    /** Detalles adicionales del error */
    details?: {
        [key: string]: unknown;
        /** Campos específicos que fallaron en el backend */
        invalidFields?: string[];
    };
    /** Timestamp del error */
    timestamp: Date;
    /** Ruta de la API que generó el error */
    path?: string;
};