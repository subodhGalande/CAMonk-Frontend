import { BlogPage } from "./components/blogPage";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogDetail } from "./components/blogDetail";
import { useMediaQuery } from "react-responsive";
import { ScrollToTop } from "./components/scrollToTop";

const queryClient = new QueryClient();

function App() {
  const isMobile = useMediaQuery({ maxWidth: 820 });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <main className="mx-auto w-full md:max-w-[1440px]">
          <Routes>
            {isMobile ? (
              /* MOBILE ROUTES */
              <>
                <Route path="/" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
              </>
            ) : (
              /* DESKTOP ROUTES */
              <Route path="/" element={<BlogPage />}>
                <Route
                  index
                  element={
                    <div className="h-full flex items-center justify-center text-muted-foreground">
                      Select a blog to read
                    </div>
                  }
                />
                <Route path="blog/:id" element={<BlogDetail />} />
              </Route>
            )}
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>

      <Toaster position="top-center" richColors theme="light" closeButton />
    </QueryClientProvider>
  );
}

export default App;
