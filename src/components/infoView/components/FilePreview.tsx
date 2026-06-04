import type { SqlEndpoints } from "../InfoView.types.js";


type FilePreviewProps = {
    fileUrl: string;
    category:string;
    sqlOpsUrls?: SqlEndpoints | undefined;
      blob: Blob | null;
        filePath: string;

};

const FilePreview = ({ fileUrl,category,  blob,
  sqlOpsUrls,
  filePath,
 }: FilePreviewProps) => {
    if (!fileUrl) return null;



    if (category === "image") {
        return <img src={fileUrl} className="max-h-[80vh] mx-auto" />;
    }

    if (category === "pdf" || category === "text") {
        return <iframe src={fileUrl} className="w-full h-[80vh]" />;
    }

    if (category === "video") {
        return (
            <video controls className="w-full max-h-[80vh]">
                <source src={fileUrl} />
            </video>
        );
    }
const handleDownload = async (
  e: React.MouseEvent<HTMLAnchorElement>
) => {
  if (
    sqlOpsUrls?.native?.downloadFile &&
    typeof sqlOpsUrls.native.downloadFile === "function" &&
    blob
  ) {
    e.preventDefault();
const fileName = filePath.split("/").pop() ?? "download";
    await sqlOpsUrls.native.downloadFile(
      blob,
      fileName
    );
  }
};
    return (
        <div className="text-center p-4">
            <p>Preview not available</p>
            <a   onClick={handleDownload} href={fileUrl} download className="text-blue-600 underline">
                Download file
            </a>
        </div>
    );
};

export default FilePreview;
