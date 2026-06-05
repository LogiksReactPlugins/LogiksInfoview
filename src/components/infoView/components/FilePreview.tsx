import type { SqlEndpoints } from "../InfoView.types.js";

type FilePreviewProps = {
  fileUrl: string;
  category: string;
  sqlOpsUrls?: SqlEndpoints | undefined;
  blob: Blob | null;
  filePath: string;
};

const FilePreview = ({
  fileUrl,
  category,
  blob,
  sqlOpsUrls,
  filePath,
}: FilePreviewProps) => {
  if (!fileUrl) return null;

const isNativeDownloadSupported =
  typeof sqlOpsUrls?.native?.downloadFile ===
  "function";
 const handleDownload = async (
  e: React.MouseEvent<HTMLAnchorElement>
) => {
  const downloadFile =
    sqlOpsUrls?.native?.downloadFile;

  if (
    typeof downloadFile === "function" &&
    blob
  ) {
    e.preventDefault();

    const fileName =
      filePath.split("/").pop() ??
      "download";

    await downloadFile(
      blob,
      fileName
    );
  }
};

  // Image
  if (category === "image") {
    return (
      <img
        src={fileUrl}
        className="max-h-[80vh] mx-auto"
      />
    );
  }

  // Text
  if (category === "text") {
    return (
      <iframe
        src={fileUrl}
        className="w-full h-[80vh]"
      />
    );
  }

  // PDF preview only when native download is NOT available
  if (
    category === "pdf" &&
    !isNativeDownloadSupported
  ) {
    return (
      <iframe
        src={fileUrl}
        className="w-full h-[80vh]"
      />
    );
  }

  // Video
  if (category === "video") {
    return (
      <video
        controls
        className="w-full max-h-[80vh]"
      >
        <source src={fileUrl} />
      </video>
    );
  }

  const unsupportedPreview =
    category === "pdf"
      ? {
          title: "PDF Document",
          buttonText:
            "Download PDF",
          bg: "from-red-50 to-white",
          button:
            "bg-red-600 hover:bg-red-700",
          iconBg: "bg-red-600",
        }
      : category === "excel"
      ? {
          title: "Excel File",
          buttonText:
            "Download Excel File",
          bg: "from-green-50 to-white",
          button:
            "bg-green-600 hover:bg-green-700",
          iconBg: "bg-green-600",
        }
      : category === "csv"
      ? {
          title: "CSV File",
          buttonText:
            "Download CSV File",
          bg: "from-emerald-50 to-white",
          button:
            "bg-emerald-600 hover:bg-emerald-700",
          iconBg:
            "bg-emerald-600",
        }
      : category === "doc"
      ? {
          title:
            "Word Document",
          buttonText:
            "Download Document",
          bg: "from-blue-50 to-white",
          button:
            "bg-blue-600 hover:bg-blue-700",
          iconBg: "bg-blue-600",
        }
      : category === "ppt"
      ? {
          title:
            "PowerPoint Presentation",
          buttonText:
            "Download Presentation",
          bg: "from-orange-50 to-white",
          button:
            "bg-orange-600 hover:bg-orange-700",
          iconBg:
            "bg-orange-600",
        }
      : category === "zip"
      ? {
          title:
            "Archive File",
          buttonText:
            "Download Archive",
          bg: "from-gray-50 to-white",
          button:
            "bg-gray-700 hover:bg-gray-800",
          iconBg: "bg-gray-700",
        }
      : null;

  if (unsupportedPreview) {
    return (
      <div
        className={`w-full min-h-[420px] flex flex-col items-center justify-center gap-5 border border-gray-200 rounded-xl bg-gradient-to-b ${unsupportedPreview.bg}`}
      >
        <div
          className={`w-24 h-24 rounded-2xl text-white flex items-center justify-center shadow-lg ${unsupportedPreview.iconBg}`}
        >
          <span className="text-4xl">
            📄
          </span>
        </div>

        <div className="text-center">
          <div className="text-lg font-semibold text-gray-800">
            {
              unsupportedPreview.title
            }
          </div>

          <div className="text-sm text-gray-500 break-all px-4">
            {filePath
              .split("/")
              .pop()}
          </div>
        </div>

        <a
          onClick={
            handleDownload
          }
          href={fileUrl}
          download
          className={`${unsupportedPreview.button} text-white px-5 py-2.5 rounded-lg`}
        >
          {
            unsupportedPreview.buttonText
          }
        </a>
      </div>
    );
  }

  // Fallback
  return (
    <div className="text-center p-4">
      <p>
        Preview not available
      </p>

      <a
        onClick={handleDownload}
        href={fileUrl}
        download
        className="text-blue-600 underline"
      >
        Download file
      </a>
    </div>
  );
};

export default FilePreview;