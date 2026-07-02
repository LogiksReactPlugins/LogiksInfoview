import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Props {
    value?: string;
    language?: string;
    height?: number | string;
}

const languageMap: Record<string, string> = {
    js: "javascript",
    ts: "typescript",
    shell: "bash",
    sh: "bash",
    yml: "yaml",
};

export default function CodeViewer({
    value = "",
    language = "javascript",
    height = 400,
}: Props) {
    const lang =
        languageMap[language.toLowerCase()] ??
        language.toLowerCase();

    return (
        <div
            className="overflow-auto rounded-lg border border-gray-200"
            style={{ maxHeight: typeof height === "number" ?`${height}px` :  `${height}`}}
        >
            <SyntaxHighlighter
                language={lang}
                style={oneLight}
                showLineNumbers
                wrapLongLines
                customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    background: "transparent",
                }}
            >
                {value}
            </SyntaxHighlighter>
        </div>
    );
}