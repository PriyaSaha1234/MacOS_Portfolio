import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components/index.js";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState(null);

    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />

                <h2>Resume.pdf</h2>

                <a
                    href="files/resume.pdf"
                    download
                    className="cursor-pointer"
                    title="Download resume"
                >
                    <Download className="icon" />
                </a>
            </div>

            <div className="h-[70vh] overflow-y-auto bg-gray-200 p-6">
                <Document
                    file="files/resume.pdf"
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                >
                    {Array.from({ length: numPages || 0 }, (_, index) => (
                        <div
                            key={index}
                            className="flex justify-center mb-6"
                        >
                            <div className="bg-white shadow-xl rounded-sm overflow-hidden">
                                <Page
                                    pageNumber={index + 1}
                                    renderTextLayer
                                    renderAnnotationLayer
                                />
                            </div>
                        </div>
                    ))}
                </Document>
            </div>
        </>
    );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;