import InfoView from "./components/infoView/index.js";
import { example10 } from "./data.js"


function App() {


    return <InfoView infoViewJson={example10} handleAction={() => { }} toast={{ "success": () => { } }} />;
}

export default App;