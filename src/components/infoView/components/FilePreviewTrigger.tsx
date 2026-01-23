import { useState, type JSX } from "react";
import { fileIconClassMap, getFileExtension, getMimeCategory } from "../utils.js";
import type { FileCategory, SqlEndpoints } from "../InfoView.types.js";
import FilePreview from "./FilePreview.js";

type FilePreviewTriggerProps = {
  filePath: string;
  sqlOpsUrls?: SqlEndpoints | undefined;
};
function getFileIcon(category: FileCategory): JSX.Element {
  const iconClass = fileIconClassMap[category] ?? fileIconClassMap.other;
  return <i className={`${iconClass} text-2xl text-gray-600`} />;
}

const FilePreviewTrigger = ({ filePath, sqlOpsUrls }: FilePreviewTriggerProps) => {
  const [open, setOpen] = useState(false);
  const ext = getFileExtension(filePath);
  const category = getMimeCategory(ext);
  const icon = getFileIcon(category);

  let fullUrl = `${sqlOpsUrls?.baseURL}${String(filePath).startsWith("/") ? filePath : `/${filePath}`}`
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

            <FilePreview fileUrl={fullUrl} />
          </div>
        </div>
      )}
    </>
  );
};


export default FilePreviewTrigger
