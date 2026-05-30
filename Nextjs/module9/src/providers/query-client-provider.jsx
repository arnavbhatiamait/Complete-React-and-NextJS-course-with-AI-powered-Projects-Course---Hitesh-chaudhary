"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

// const queryClient = new QueryClient();
function QueryClientProviderWrapper({ children }) {
    // ! use state to hjave one query client instance for the entire app
    const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
export default QueryClientProviderWrapper;