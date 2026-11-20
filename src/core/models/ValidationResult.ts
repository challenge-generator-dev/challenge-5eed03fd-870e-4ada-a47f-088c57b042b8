/**
 * Resultado de una validación de campo o paso.
 * Contiene información sobre errores y si la validación fue exitosa.
 */
export type ValidationResult = {
    /** Indica si la validación fue exitosa */
    isValid: boolean;
    /** Mensajes de error específicos */
    errors: Record<string, string>;
    /** Campos que fallaron la validación */
    invalidFields: string[];
};