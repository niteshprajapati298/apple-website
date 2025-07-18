import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://72786627e87b3f78cfdadd625c27776b@o4509688314331136.ingest.us.sentry.io/4509688316100608",
  sendDefaultPii: true,

  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false
    })
  ],

  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 1.0, // Use 1.0 for full capture in dev
  replaysOnErrorSampleRate: 1.0
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
