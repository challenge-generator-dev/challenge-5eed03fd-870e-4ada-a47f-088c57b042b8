import type { Field } from './Field';

/**
 * Representa un paso del formulario multipaso.
 * Cada paso agrupa un conjunto de campos que se validan y se completan juntos.
 */
export type Step = {
  /** Identificador único del paso */
  id: string;
  /** Título del paso visible para el usuario */
  title: string;
  /** Descripción opcional del paso */
  description?: string;
  /** Campos que pertenecen a este paso */
  fields: Field[];
  /** Indica si el paso está completo y puede avanzarse */
  isComplete: boolean;
  /** Validaciones específicas para este paso (se tipará con Zod en el servicio de validación) */
  validationSchema?: unknown;
};