import type { Step } from './Step';

/**
 * Estructura completa de los datos del formulario multipaso.
 * Contiene todos los campos de todos los pasos y metadatos del estado.
 */
export type FormData = {
  /** Identificador único del formulario (generado por el backend) */
  formId?: string;
  /** Pasos del formulario */
  steps: Step[];
  /** Paso actual en el que se encuentra el usuario */
  currentStepId: string;
  /** Datos ingresados por el usuario, mapeados por fieldId */
  values: Record<string, unknown>;
  /** Estado general del formulario */
  status: 'draft' | 'submitting' | 'submitted' | 'error';
  /** Timestamp de última modificación */
  lastUpdated: Date;
  /** Metadatos adicionales para el backend */
  metadata?: {
    userAgent?: string;
    ipAddress?: string;
  };
};