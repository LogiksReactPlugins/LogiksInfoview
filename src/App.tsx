import InfoView from "./components/infoView/index.js";
import { example7 } from "./data.js"


function App() {

    const getInfoData = () => {
        return {
            "id": 1,
            "guid": "global",
            "persona_code": "ASSISTANT",
            "persona_name": "Assistant",
            "persona_descs": "Default Assistant",
            "persona_howtouse": "",
            "persona_refurl": "",
            "persona_avatar": "https://ai.smartinfologiks.com/api/public/images/personas/default.png",
            "persona_group": "Assistant",
            "rating": 0,
            "status": "published",
            "visibility": "public",
            "tags": "",
            "persona_llm": "",
            "persona_uikit": "chat",
            "user_variables": {},
            "studio_editors": "admin",
            "studio_testers": "admin",
            "blocked": "false",
            "created_on": "2024-11-10T19:25:05.000Z",
            "created_by": "SmartinfoLogiks",
            "edited_on": "2024-11-10T19:25:05.000Z",
            "edited_by": "root",
            "editable": false
        }
    }
    return <InfoView formJson={example7} methods={{ getInfoData }} />;
}

export default App;