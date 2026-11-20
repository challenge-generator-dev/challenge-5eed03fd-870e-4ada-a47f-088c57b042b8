/**
 * Representa un campo individual en un paso del formulario.
 * Contiene la definición del campo, su valor y estado de validación.
 */
export type Field = {
    /** Identificador único del campo */
    id: string;
    /** Etiqueta visible para el usuario */
    label: string;
    /** Tipo de campo (text, email, select, etc.) */
    type: 'text' | 'email' | 'password' | 'select' | 'checkbox' | 'radio' | 'date' | 'number';
    /** Valor actual del campo */
    value: unknown;
    /** Indica si el campo es obligatorio */
    required: boolean;
    /** Mensaje de error específico del campo */
    error?: string;
    /** Opciones disponibles para campos tipo select/radio */
    options?: Array<{
        value: string;
        label: string;
    }>;
    /** Atributos adicionales para el elemento HTML */
    attributes?: Record<string, string>;
    /** Validaciones específicas para este campo */
    validation?: {
        pattern?: string;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;
    };
};