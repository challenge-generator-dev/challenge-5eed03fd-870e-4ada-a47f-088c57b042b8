# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/core/stores/multiStepFormStore.ts` — La pieza p1 (Gestión del estado en formularios multipaso, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/core/services/FormValidationService.ts` — La pieza p2 (Validación por campo y por paso, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/form/MultiStepForm.tsx` — La pieza p3 (Integración de validaciones en el formulario, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/infrastructure/services/ErrorMappingService.ts` — La pieza p4 (Transformación de errores del servidor a mensajes amigables, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/core/services/FormUXService.ts` — La pieza p5 (Feedback visual y navegación intuitiva, fase f4) vive aqui: este archivo es su unico dueno (blueprint v2).

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollo frontend, Tecnología React, Advanced L2

### Brecha de conocimiento
Construye formularios de varios pasos con validación por campo y por paso, manejo de errores del servidor y una experiencia de usuario clara.

### Misión / candidato
Reducir el abandono en el registro de clientes

### Reto
- Tema: Formularios complejos con validación en React
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de un formulario multipaso con validación en React
- Tiempo estimado: 10 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Diseño del formulario multipaso — objetivo: Definir la estructura y los campos del formulario de varios pasos. — entregable (NO resolver): Diagrama del flujo del formulario multipaso y pseudocódigo de las validaciones, anclado a la pieza `MultiStepFormState` que implementa el estado del formulario.
- Fase 2: Implementación de validaciones por campo — objetivo: Implementar las validaciones por campo en el formulario. — entregable (NO resolver): Código del formulario con validaciones por campo implementadas y pruebas unitarias para las validaciones.
- Fase 3: Manejo de errores del servidor — objetivo: Implementar el manejo de errores del servidor en el formulario. — entregable (NO resolver): Código del formulario con manejo de errores del servidor implementado y pruebas de integración para el manejo de errores.
- Fase 4: Experiencia de usuario — objetivo: Mejorar la experiencia de usuario del formulario. — entregable (NO resolver): Código del formulario con mejoras en la experiencia de usuario implementadas y pruebas de usabilidad.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { MultiStepForm } from './features/form/MultiStepForm';
import { theme } from './shared/theme';
import type { Step } from './core/models/Step';
import type { FormData } from './core/models/FormData';
import './index.css';

// Punto de entrada de la aplicación.
// Monta el árbol de React y provee los contextos globales:
// - QueryClientProvider: caché y estado asíncrono de las peticiones al servidor.
// - ThemeProvider: tema visual compartido por todos los componentes.
// - CssBaseline: normaliza los estilos base del navegador.

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

// Pasos del formulario de registro de clientes. Se pasan como prop al formulario
// para que el contenedor no dependa de datos hardcodeados dentro del componente.
const registrationSteps: Step[] = [];

// Manejador de envío: el contenedor entrega los datos completos del formulario.
// La persistencia real se conecta en la fase de manejo de errores del servidor.
const handleSubmit = async (_data: FormData): Promise<void> => {
  return Promise.resolve();
};

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento raíz #root en index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MultiStepForm steps={registrationSteps} onSubmit={handleSubmit} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// === ARCHIVO: package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build"
  },
  "dependencies": {
    "@mui/material": "6.5.0",
    "@tanstack/react-query": "5.108.2",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "zustand": "4.5.7"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: src/core/models/Step.ts ===
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

// === ARCHIVO: src/core/models/FormData.ts ===
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

// === ARCHIVO: src/core/models/Field.ts ===
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

// === ARCHIVO: src/core/models/ValidationResult.ts ===
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

// === ARCHIVO: src/core/models/ServerError.ts ===
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

// === ARCHIVO: src/core/models/UserFriendlyError.ts ===
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

// === ARCHIVO: src/core/stores/multiStepFormStore.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { create } from 'zustand';
import type { Step } from '../models/Step';
import type { FormData } from '../models/FormData';

export type MultiStepFormState = {
  currentStep: number;
  steps: Step[];
  formData: FormData;
  isValid: (step: number) => boolean;
  setCurrentStep: (step: number) => void;
  setFormData: (data: Partial<FormData>) => void;
  updateFieldValue: (fieldId: string, value: unknown) => void;
  nextStep: () => void;
  previousStep: () => void;
  reset: () => void;
};

const createInitialFormData = (steps: Step[]): FormData => ({
  formId: crypto.randomUUID(),
  steps,
  currentStepId: steps[0]?.id || '',
  values: {},
  status: 'draft',
  lastUpdated: new Date(),
  metadata: {},
});

export const createMultiStepFormStore = (initialSteps: Step[]) => {
  throw new Error('TODO(reto): createMultiStepFormStore');
};

// === ARCHIVO: src/core/services/FormValidationService.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import type { Field } from '../models/Field';
import type { Step } from '../models/Step';
import type { FormData } from '../models/FormData';
import type { ValidationResult } from '../models/ValidationResult';

export class FormValidationService {
  validateField(field: Field, value: unknown): ValidationResult {
    throw new Error('TODO(reto): validateField');
  }

  validateStep(step: Step, formData: FormData): ValidationResult {
    throw new Error('TODO(reto): validateStep');
  }

  validateAllSteps(steps: Step[], formData: FormData): ValidationResult {
    throw new Error('TODO(reto): validateAllSteps');
  }
}

export const formValidationService = new FormValidationService();

// === ARCHIVO: src/features/form/MultiStepForm.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useCallback } from 'react';
import type { Step } from '../../core/models/Step';
import type { FormData } from '../../core/models/FormData';
import type { ValidationResult } from '../../core/models/ValidationResult';
import { formValidationService } from '../../core/services/FormValidationService';

export interface MultiStepFormProps {
  steps: Step[];
  onSubmit: (data: FormData) => Promise<void>;
  initialData?: Partial<FormData>;
}

interface MultiStepFormState {
  currentStep: number;
  values: Record<string, unknown>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  submitError: string | null;
}

export function MultiStepForm({ steps, onSubmit, initialData }: MultiStepFormProps): JSX.Element {
  throw new Error('TODO(reto): anonymous');
}

// === ARCHIVO: src/infrastructure/services/ErrorMappingService.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import type { ServerError } from '../../core/models/ServerError';
import type { UserFriendlyError } from '../../core/models/UserFriendlyError';

export class ErrorMappingService {
  mapServerError(error: ServerError): UserFriendlyError {
    throw new Error('TODO(reto): mapServerError');
  }

  private mapUnknownError(error: ServerError): UserFriendlyError {
    throw new Error('TODO(reto): mapUnknownError');
  }

  mapValidationErrors(details?: Record<string, unknown>): UserFriendlyError {
    throw new Error('TODO(reto): mapValidationErrors');
  }

  mapNetworkError(): UserFriendlyError {
    throw new Error('TODO(reto): mapNetworkError');
  }

  mapTimeoutError(): UserFriendlyError {
    throw new Error('TODO(reto): mapTimeoutError');
  }
}

export const errorMappingService = new ErrorMappingService();

// === ARCHIVO: src/core/services/FormUXService.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { ProgressIndicator } from '../models/ProgressIndicator';
import { Step } from '../models/Step';
import { StepNavigation } from '../models/StepNavigation';

export class FormUXService {
  getProgressIndicator(currentStep: number, totalSteps: number): ProgressIndicator {
    throw new Error('TODO(reto): getProgressIndicator');
  }

  getStepNavigation(step: Step, isValid: boolean): StepNavigation {
    throw new Error('TODO(reto): getStepNavigation');
  }
}

// === ARCHIVO: src/core/models/ProgressIndicator.ts ===
export type ProgressIndicator = {
  currentStep: number;
  totalSteps: number;
  percentage: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  stepLabels: string[];
  isComplete: boolean;
};

// === ARCHIVO: src/core/models/StepNavigation.ts ===
export type StepNavigation = {
  canGoNext: boolean;
  canGoPrevious: boolean;
  nextButtonLabel: string;
  previousButtonLabel: string;
  showProgress: boolean;
  nextDisabledReason?: string;
  currentStepIndex: number;
  totalSteps: number;
};

// === ARCHIVO: src/index.css ===
/* Estilos pendientes: archivo creado automaticamente porque otro modulo lo importa. */


// === ARCHIVO: src/shared/theme.ts ===
import { createTheme } from '@mui/material/styles';

// Tema visual compartido por el formulario multipaso.
// Centraliza colores, tipografía y espaciados para que los componentes
// presentacionales mantengan una apariencia consistente y accesible.

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1f5fbf',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0f766e',
      contrastText: '#ffffff',
    },
    error: {
      main: '#b42318',
    },
    success: {
      main: '#067647',
    },
    background: {
      default: '#f5f7fb',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});
```
