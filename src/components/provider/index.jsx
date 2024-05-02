import { ThemeProvider } from "./ThemeProvider";

const Provider = ({ children }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  );
};

export default Provider;
