import { useEffect, useState, type JSX } from "react";
import { fileIconClassMap, getFileExtension, getMimeCategory } from "../utils.js";
import type { FileCategory, SqlEndpoints } from "../InfoView.types.js";
import FilePreview from "./FilePreview.js";
import { getPreviewUrl } from "../service.js";

type FilePreviewTriggerProps = {
  filePath: string;
  sqlOpsUrls?: SqlEndpoints | undefined;
};
function getFileIcon(category: FileCategory): JSX.Element {
  const iconClass = fileIconClassMap[category] ?? fileIconClassMap.other;
  return <i className={`${iconClass} text-2xl text-gray-600`} />;
}

const FilePreviewTrigger = ({ filePath, sqlOpsUrls }: FilePreviewTriggerProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [open, setOpen] = useState(false);


  useEffect(() => {
 
    if (!open || !sqlOpsUrls) return;
    let active = true;
    let objectUrl: string | null = null;

    getPreviewUrl(filePath, sqlOpsUrls).then((url) => {

      if (!active) return;
      objectUrl = url;
      setPreviewUrl(url);
    });

    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [open, filePath, sqlOpsUrls]);


  const ext = getFileExtension(filePath);
  const category = getMimeCategory(ext);
  const icon = getFileIcon(category);

  return (
    <>

      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        className="inline-flex cursor-pointer"
      >
        {icon} &nbsp; {filePath?.split("/").pop()}
      </div>


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
              <FilePreview fileUrl={previewUrl} category={category} />
            ) : (
              <div className="text-center p-8">Loading preview…</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};


export default FilePreviewTrigger
