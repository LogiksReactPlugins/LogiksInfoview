import InfoView from "./components/infoView/index.js";
import { example9 } from "./data.js"

function DemoComp() {
    return <div>I am a demo component</div>
}
function App() {


    return <InfoView components={{ DemoComp }} infoViewJson={example9} handleAction={() => { }} toast={{ "success": () => { } }} />;
}

export default App;