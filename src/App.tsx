import InfoView from "./components/infoView/index.js";
import { example7 } from "./data.js"

const randomString = (length = 8) => {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    return Array.from({ length })
        .map(() => chars[Math.floor(Math.random() * chars.length)])
        .join("");
};

const randomEmail = () => `${randomString(5)}@example.com`;

const randomPhone = () =>
    "+91" +
    Array.from({ length: 10 })
        .map(() => Math.floor(Math.random() * 10))
        .join("");

const randomDate = () => {
    const start = new Date(1990, 0, 1).getTime();
    const end = new Date(2020, 0, 1).getTime();
    return new Date(start + Math.random() * (end - start));
};

export function generateMockData(rows: number): Array<Record<string, any>> {
    return Array.from({ length: rows }).map((_, i) => ({
        id: i + 1,
        name: randomString(7),
        email: randomEmail(),
        phone: randomPhone(),
        dob: randomDate().toISOString().split("T")[0],
        isActive: Math.random() > 0.5,
        address: `${Math.floor(Math.random() * 1000)} ${randomString(5)} Street, City`,
        notes: randomString(20),

        // 👇 extra fields to test horizontal scroll
        department: ["HR", "Engineering", "Sales", "Finance"][Math.floor(Math.random() * 4)],
        role: ["Manager", "Developer", "Analyst", "Intern"][Math.floor(Math.random() * 4)],
        salary: (30000 + Math.random() * 70000).toFixed(2),
        bonus: (Math.random() * 10000).toFixed(2),
        rating: (Math.random() * 5).toFixed(1),
        joinDate: randomDate().toISOString().split("T")[0],
        lastLogin: randomDate().toISOString(),
        project: randomString(10),
        skills: `${randomString(5)}, ${randomString(5)}, ${randomString(5)}`,
        manager: randomString(6),
    }));
}
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


    function getAddresses() {
        return generateMockData(50)
    }

    function getSocials() {
        return generateMockData(100)
    }

    function getBankDetails() {
        return generateMockData(70)
    }

    function getOrganizationInfo() {
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

    function addInfoRecord(form: Record<string, any>, tab: string) {
        console.log("form", form);
        console.log("tab", tab)
    }

    function editInfoRecord(data: Record<string, any>, tab: string) {
        console.log("data", data);
        console.log("tab", tab)
    }

    function viewInfoRecord(data: Record<string, any>, info: Record<string, any>) {
        console.log("data", data);
        console.log("info", info)
    }

    function deleteInfoRecord(data: Record<string, any>, tab: string) {
        console.log("data", data);
        console.log("tab", tab)
    }

    return <InfoView infoViewJson={example7} methods={{
        getInfoData,
        getAddresses,
        getSocials,
        getBankDetails,
        getOrganizationInfo,
        editInfoRecord,
        viewInfoRecord,
        deleteInfoRecord,
        addInfoRecord


    }} />;
}

export default App;