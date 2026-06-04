import { useEffect, useState, type JSX } from "react";
import { fileIconClassMap, getFileExtension, getMimeCategory } from "../utils.js";
import type { FileCategory, SqlEndpoints } from "../InfoView.types.js";
import FilePreview from "./FilePreview.js";
import { getPreviewUrl, getPreviewUrlWithBlob } from "../service.js";

type FilePreviewTriggerProps = {
  filePath: string;
  sqlOpsUrls?: SqlEndpoints | undefined;
};
function getFileIcon(category: FileCategory): JSX.Element {
  const iconClass = fileIconClassMap[category] ?? fileIconClassMap.other;
  return <i className={`${iconClass} text-2xl text-gray-600`} />;
}

const FilePreviewTrigger = ({ filePath, sqlOpsUrls }: FilePreviewTriggerProps) => {
  const cleanPath = filePath.replace(/^[^&]*&/, "");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
const [blob, setBlob] = useState<Blob | null>(null);
  const ext = getFileExtension(cleanPath);
  const category = getMimeCategory(ext);
  useEffect(() => {

    if (!sqlOpsUrls) return;

    // load immediately for images (thumbnail)
    if (category !== "image" && !open) return;
    let active = true;
    let objectUrl: string | null = null;

   getPreviewUrlWithBlob(cleanPath, sqlOpsUrls).then(
  ({ previewUrl, blob }) => {
    if (!active) return;

    objectUrl = previewUrl;
    setPreviewUrl(previewUrl);
    setBlob(blob);
  }
);

    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [category, open, cleanPath, sqlOpsUrls]);

  let fileName = cleanPath.split("/").pop();
  return (
    <>

      {category === "image" ? (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
          className="h-16 w-16 rounded overflow-hidden cursor-pointer"
          title="Click to preview"
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt={fileName}
              className="h-full w-full object-cover hover:opacity-90"
            />
          ) : (
            <div className="h-full w-full bg-gray-100 flex items-center justify-center">
              <i className="fa-regular fa-image text-gray-400" />
            </div>
          )}
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
          className="inline-flex cursor-pointer items-center gap-1"
          title="Click to preview"
        >
          {getFileIcon(category)}
          <span className="text-sm">{fileName}</span>
        </div>
      )}


      {open && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 max-w-5xl w-full">
            <button
              className="float-right text-sm"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

             {previewUrl ? (
              <FilePreview sqlOpsUrls={sqlOpsUrls} filePath={filePath}  blob={blob}  fileUrl={previewUrl} category={category} />
            ) : (
              <div className="flex flex-col items-center justify-center py-12">
                <i className="fa-solid fa-spinner fa-spin text-3xl text-gray-900 mb-3" />
                <span className="text-gray-600">Loading preview...</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};


export default FilePreviewTrigger
