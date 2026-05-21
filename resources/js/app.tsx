import { createRoot, hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider } from './src/context/ThemeContext';

const appName = import.meta.env.VITE_APP_NAME || 'CameleonLab';

createInertiaApp({
    title: (title) => `${title} — ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const app = (
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>
        );

        if (import.meta.env.DEV) {
            createRoot(el).render(app);
            return;
        }

        hydrateRoot(el, app);
    },
    progress: { 
        color: '#00E87A',
    },
});
