import { BlogPage } from "./components/blogPage";
import { Footer2 } from "./components/footer2";
import { Navbar1 } from "./components/navbar1";

function App() {
  return (
    <>
      <Navbar1 />
      <main className="mx-auto max-w-[1440px]">
        <BlogPage />
      </main>
      <Footer2 />
    </>
  );
}

export default App;
