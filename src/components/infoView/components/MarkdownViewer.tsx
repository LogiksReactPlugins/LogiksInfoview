import MarkdownPreviewComponent
  from "@uiw/react-markdown-preview";

const MarkdownPreview =
  (MarkdownPreviewComponent.default ??
    MarkdownPreviewComponent) as React.ComponentType<any>;

export default function MarkdownViewer({
  value = "",
}: {
  value?: string;
}) {
  return (
    <div className="p-2 max-h-[400px] overflow-auto">
      <MarkdownPreview
        source={value}
        style={{
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}