# Implementación de un formulario multipaso con validación en React

El sistema de registro de clientes requiere un formulario de varios pasos con validación por campo y por paso, manejo de errores del servidor y una experiencia de usuario clara. El objetivo es reducir el abandono en el proceso de registro.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Formularios complejos con validación en React |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 10 horas |

## Stack

- **Lenguaje:** TypeScript
- **Framework:** React 19
- **Version:** Node 20

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Diseño del formulario multipaso

**Objetivo:** Definir la estructura y los campos del formulario de varios pasos.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Dibujar el flujo de pasos del formulario, identificando transiciones válidas e inválidas.
- Escribir pseudocódigo para la gestión del estado entre pasos, usando la estructura definida en `MultiStepFormState`.
- Definir las reglas de validación por campo y por paso en pseudocódigo, que luego implementará la pieza `FormValidationService`.

**Entregable:** Diagrama del flujo del formulario multipaso y pseudocódigo de las validaciones, anclado a la pieza `MultiStepFormState` que implementa el estado del formulario.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la usabilidad y la experiencia del usuario al diseñar la navegación entre pasos.
- Piensa en las validaciones necesarias para cada campo y cómo comunicar los errores al usuario.

</details>

### Fase 2: Implementación de validaciones por campo

**Objetivo:** Implementar las validaciones por campo en el formulario.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa las validaciones definidas en la fase anterior para cada campo del formulario.
- Asegúrate de que los errores de validación se comuniquen claramente al usuario.

**Entregable:** Código del formulario con validaciones por campo implementadas y pruebas unitarias para las validaciones.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza librerías de validación para simplificar el proceso.
- Prueba cada validación para asegurar que funciona correctamente.

</details>

### Fase 3: Manejo de errores del servidor

**Objetivo:** Implementar el manejo de errores del servidor en el formulario.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Implementa la lógica para manejar los errores del servidor en el formulario.
- Asegúrate de que los errores del servidor se comuniquen claramente al usuario.

**Entregable:** Código del formulario con manejo de errores del servidor implementado y pruebas de integración para el manejo de errores.

<details>
<summary>Pistas de conocimiento</summary>

- Considera diferentes tipos de errores del servidor y cómo manejarlos.
- Prueba el manejo de errores para asegurar que funciona correctamente.

</details>

### Fase 4: Experiencia de usuario

**Objetivo:** Mejorar la experiencia de usuario del formulario.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Implementa mejoras en la experiencia de usuario del formulario, como feedback en tiempo real y mensajes de éxito/error.
- Asegúrate de que el formulario sea accesible y usable para todos los usuarios.

**Entregable:** Código del formulario con mejoras en la experiencia de usuario implementadas y pruebas de usabilidad.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la accesibilidad y la usabilidad en tus mejoras.
- Prueba las mejoras con usuarios reales para asegurar que funcionan correctamente.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un formulario multipaso y por qué se usa en este contexto?
- **paraQueSirve**: ¿Para qué sirve la validación por campo y por paso en este formulario?
- **comoSeUsa**: ¿Cómo se usa el manejo de errores del servidor en este formulario?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar validaciones en un formulario?
- **queDecisionesImplica**: ¿Qué decisiones implica mejorar la experiencia de usuario en este formulario?

## Criterios de Evaluacion

- Diseño del formulario multipaso.
- Implementación de validaciones por campo.
- Manejo de errores del servidor.
- Mejora en la experiencia de usuario.

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Diseño del formulario multipaso | Gestión del estado en formularios multipaso | `src/core/stores/multiStepFormStore.ts:MultiStepFormState` | El diagrama de flujo cubre todos los pasos del formulario y sus transiciones válidas.; El pseudocódigo define claramente el estado del formulario y las validaciones por campo y por paso. | — | — |
| f2 — Implementación de validaciones por campo | Validación por campo y por paso | `src/core/services/FormValidationService.ts:FormValidationService` | El formulario valida cada campo según las reglas definidas en la fase f1.; El formulario no permite avanzar a un paso siguiente si las validaciones del paso actual fallan.; Las validaciones se prueban con casos de éxito y error. | — | — |
| f2 — Implementación de validaciones por campo | Integración de validaciones en el formulario | `src/features/form/MultiStepForm.tsx:MultiStepForm` | El formulario valida cada campo según las reglas definidas en la fase f1.; El formulario no permite avanzar a un paso siguiente si las validaciones del paso actual fallan.; Las validaciones se prueban con casos de éxito y error. | — | — |
| f3 — Manejo de errores del servidor | Transformación de errores del servidor a mensajes amigables | `src/infrastructure/services/ErrorMappingService.ts:ErrorMappingService` | El formulario maneja errores del servidor y los muestra al usuario de forma clara.; Los errores del servidor se transforman en mensajes amigables según el tipo de error.; El manejo de errores se prueba con casos de éxito y error. | — | — |
| f4 — Experiencia de usuario | Feedback visual y navegación intuitiva | `src/core/services/FormUXService.ts:FormUXService` | El formulario proporciona feedback visual claro durante la navegación entre pasos.; El usuario puede navegar entre pasos de forma intuitiva, con indicadores de progreso.; Las mejoras de UX se prueban con casos de usabilidad. | — | — |

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Hace formularios simples pero se le complica el estado en formularios de varios pasos | `src/core/stores/multiStepFormStore.ts:MultiStepFormState` | Verificada |

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
