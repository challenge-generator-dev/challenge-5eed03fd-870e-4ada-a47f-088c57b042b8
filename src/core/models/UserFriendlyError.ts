/**
 * Mensaje de error amigable para mostrar al usuario.
 * Derivado de ServerError pero con lenguaje accesible.
 */
export type UserFriendlyError = {
    /** Título del error visible para el usuario */
    title: string;
    /** Mensaje descriptivo del error */
    message: string;
    /** Código de error para referencia */
    errorCode?: string;
    /** Acciones sugeridas para resolver el error */
    actions?: Array<{
        label: string;
        onClick: () => void;
    }>;
};