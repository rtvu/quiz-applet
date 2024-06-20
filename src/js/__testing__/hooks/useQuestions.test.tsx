import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { useQuestions } from "@hooks/useQuestions";
import { getData, getHandlesCalled } from "@mocks/handlers";

describe(useQuestions.name, () => {
  test("gets data", async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
        },
      },
    });
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    let { result } = renderHook(() => useQuestions(0), { wrapper });
    await waitFor(() => {
      expect(result.current[1]).toBe("success");
    });
    expect(result.current[0]).toEqual(getData(0)?.results);
    expect(getHandlesCalled()).toBe(1);

    ({ result } = renderHook(() => useQuestions(0), { wrapper }));
    await waitFor(() => {
      expect(result.current[1]).toBe("success");
    });
    expect(result.current[0]).toEqual(getData(0)?.results);
    expect(getHandlesCalled()).toBe(1);

    ({ result } = renderHook(() => useQuestions(1), { wrapper }));
    await waitFor(() => {
      expect(result.current[1]).toBe("success");
    });
    expect(result.current[0]).toEqual(getData(1)?.results);
    expect(getHandlesCalled()).toBe(2);
  });
});
