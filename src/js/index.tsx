import "@scss/styles.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Navbar } from "@components/Navbar";
import { RunApplet } from "@components/RunApplet";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const container = document.getElementById("application");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <main className="container" role="main">
          <RunApplet />
        </main>
      </QueryClientProvider>
    </StrictMode>,
  );
}
