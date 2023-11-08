import { Routes, Route } from "react-router-dom";
import { Home, About, Blog, Contact, NotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
