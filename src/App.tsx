import InfoView from "./components/infoView/index.js";
import { example10 } from "./data.js"

function DemoComp() {
    return <div>I am a demo component</div>
}
function App() {


    return <InfoView components={{ DemoComp }} infoViewJson={example10} handleAction={() => { }} toast={{ "success": () => { } }} />;
}

export default App;