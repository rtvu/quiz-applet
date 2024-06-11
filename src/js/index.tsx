import "../scss/styles.scss";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { RunApplet } from "./RunApplet";
import { Navbar } from "./Navbar";

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
