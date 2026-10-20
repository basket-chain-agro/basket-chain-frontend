import { useCallback, useEffect, useRef, useState } from "react";

// Pretends to fetch data from a server.
// Test the states by adding to the URL: ?state=error or ?state=empty
export default function useMockFetch(data) {
  const [state, setState] = useState({ status: "loading", data: [] });
  const forceError = useRef(
    new URLSearchParams(window.location.search).get("state") === "error",
  );

  const load = useCallback(() => {
    setState({ status: "loading", data: [] });
    const mode = new URLSearchParams(window.location.search).get("state");

    const timer = setTimeout(() => {
      if (forceError.current) {
        forceError.current = false; // so Retry works after the first failure
        setState({ status: "error", data: [] });
      } else if (mode === "empty") {
        setState({ status: "success", data: [] });
      } else {
        setState({ status: "success", data });
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [data]);

  useEffect(() => load(), [load]);

  return { ...state, retry: load };
}
