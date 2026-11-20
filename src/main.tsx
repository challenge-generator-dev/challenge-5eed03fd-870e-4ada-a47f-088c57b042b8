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