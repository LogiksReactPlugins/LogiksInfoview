

type FilePreviewProps = {
    fileUrl: string;
    category:string;
};

const FilePreview = ({ fileUrl,category }: FilePreviewProps) => {
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

    return (
        <div className="text-center p-4">
            <p>Preview not available</p>
            <a href={fileUrl} download className="text-blue-600 underline">
                Download file
            </a>
        </div>
    );
};

export default FilePreview;
