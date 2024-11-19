import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import ToDoList from "./components/ToDoList/ToDoList";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        useErrorBoundary: false,
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<ToDoList />}></Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
