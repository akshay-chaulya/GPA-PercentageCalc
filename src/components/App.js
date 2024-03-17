import { Nav, Main, Footer } from "../components";
import { useState } from "react";

export default function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [page, setPage] = useState("sgpa");

  function handleMenuOpened() {
    setIsMenuOpened(is => !is);
  }

  function handlePage(page) {
    setPage(page.toLowerCase());
    setIsMenuOpened(false);
  }

  return (
    <>
      <Nav
        isMenuOpened={isMenuOpened}
        onMenuOpened={handleMenuOpened}
        page={page}
        onSetPage={handlePage}
      />
      <Main
        page={page}
        isMenuOpened={isMenuOpened}
        onSetPage={handlePage}
      />
      <Footer/>
    </>
  );
}