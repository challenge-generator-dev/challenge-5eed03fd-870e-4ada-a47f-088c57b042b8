# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de un formulario multipaso con validación en React**.

| | |
|---|---|
| Tema | Formularios complejos con validación en React |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 19 |
| Patron arquitectonico | patrón contenedor/presentacional con manejo de estado explícito (Zustand) |
| Tiempo estimado | 10 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- react 18.3.1
- react-dom 18.3.1
- zustand 4.5.7
- @types/react 18.3.31
- @types/react-dom 18.3.7
- @vitejs/plugin-react 4.7.0
- typescript 5.7.3
- vite 5.4.21

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Diseño del formulario multipaso**: Diagrama del flujo del formulario multipaso y pseudocódigo de las validaciones, anclado a la pieza `MultiStepFormState` que implementa el estado del formulario.
- **Fase 2 — Implementación de validaciones por campo**: Código del formulario con validaciones por campo implementadas y pruebas unitarias para las validaciones.
- **Fase 3 — Manejo de errores del servidor**: Código del formulario con manejo de errores del servidor implementado y pruebas de integración para el manejo de errores.
- **Fase 4 — Experiencia de usuario**: Código del formulario con mejoras en la experiencia de usuario implementadas y pruebas de usabilidad.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/core/stores/multiStepFormStore.ts` — La pieza p1 (Gestión del estado en formularios multipaso, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/core/services/FormValidationService.ts` — La pieza p2 (Validación por campo y por paso, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/form/MultiStepForm.tsx` — La pieza p3 (Integración de validaciones en el formulario, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/infrastructure/services/ErrorMappingService.ts` — La pieza p4 (Transformación de errores del servidor a mensajes amigables, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/core/services/FormUXService.ts` — La pieza p5 (Feedback visual y navegación intuitiva, fase f4) vive aqui: este archivo es su unico dueno (blueprint v2).

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Diseño del formulario multipaso | Gestión del estado en formularios multipaso | `src/core/stores/multiStepFormStore.ts:MultiStepFormState` | El diagrama de flujo cubre todos los pasos del formulario y sus transiciones válidas.; El pseudocódigo define claramente el estado del formulario y las validaciones por campo y por paso. | — | — |
| f2 — Implementación de validaciones por campo | Validación por campo y por paso | `src/core/services/FormValidationService.ts:FormValidationService` | El formulario valida cada campo según las reglas definidas en la fase f1.; El formulario no permite avanzar a un paso siguiente si las validaciones del paso actual fallan.; Las validaciones se prueban con casos de éxito y error. | — | — |
| f2 — Implementación de validaciones por campo | Integración de validaciones en el formulario | `src/features/form/MultiStepForm.tsx:MultiStepForm` | El formulario valida cada campo según las reglas definidas en la fase f1.; El formulario no permite avanzar a un paso siguiente si las validaciones del paso actual fallan.; Las validaciones se prueban con casos de éxito y error. | — | — |
| f3 — Manejo de errores del servidor | Transformación de errores del servidor a mensajes amigables | `src/infrastructure/services/ErrorMappingService.ts:ErrorMappingService` | El formulario maneja errores del servidor y los muestra al usuario de forma clara.; Los errores del servidor se transforman en mensajes amigables según el tipo de error.; El manejo de errores se prueba con casos de éxito y error. | — | — |
| f4 — Experiencia de usuario | Feedback visual y navegación intuitiva | `src/core/services/FormUXService.ts:FormUXService` | El formulario proporciona feedback visual claro durante la navegación entre pasos.; El usuario puede navegar entre pasos de forma intuitiva, con indicadores de progreso.; Las mejoras de UX se prueban con casos de usabilidad. | — | — |

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| Hace formularios simples pero se le complica el estado en formularios de varios pasos | `src/core/stores/multiStepFormStore.ts:MultiStepFormState` | Verificada |

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (21)

- `src/main.tsx`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `index.html`
- `src/vite-env.d.ts`
- `src/core/models/Step.ts`
- `src/core/models/FormData.ts`
- `src/core/models/Field.ts`
- `src/core/models/ValidationResult.ts`
- `src/core/models/ServerError.ts`
- `src/core/models/UserFriendlyError.ts`
- `src/core/stores/multiStepFormStore.ts`
- `src/core/services/FormValidationService.ts`
- `src/features/form/MultiStepForm.tsx`
- `src/infrastructure/services/ErrorMappingService.ts`
- `src/core/services/FormUXService.ts`
- `src/core/models/ProgressIndicator.ts`
- `src/core/models/StepNavigation.ts`
- `src/index.css`
- `src/shared/theme.ts`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/core/models` (presente)
- `src/core/services` (presente)
- `src/core/stores` (presente)
- `src/features/form` (presente)
- `src/shared/components` (ausente)
- `src/shared/utils` (ausente)
- `src/shared/hooks` (ausente)
- `src/infrastructure/services` (presente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **patrón contenedor/presentacional con manejo de estado explícito (Zustand)**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollo frontend, Tecnología React, Advanced L2
- Brecha que el reto ataca: Construye formularios de varios pasos con validación por campo y por paso, manejo de errores del servidor y una experiencia de usuario clara.
- Mision: Reducir el abandono en el registro de clientes

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
