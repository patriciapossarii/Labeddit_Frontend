import { ChakraProvider } from "@chakra-ui/react";
import { GlobalContext } from "./contexts/GlobalContext";
import Router from "./routes/Router";

function App() {
  return (
    <>
       <ChakraProvider resetCSS>
      
          <Router />
          </ChakraProvider>
    </>
  );
}

export default App;
