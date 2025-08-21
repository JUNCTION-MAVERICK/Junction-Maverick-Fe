import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/App.css";
import routes from "@/routes";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/global/api/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const router = createBrowserRouter(routes);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
