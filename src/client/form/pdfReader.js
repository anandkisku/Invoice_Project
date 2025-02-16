import React, { useState } from "react";
import "./form.css";
import { GoUpload } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfReader() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onHadleSelectFile(e) {
    e.preventDefault();
    console.log("e.target.files", e.target.files[0]);
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      const fileUrl = URL.createObjectURL(uploadedFile);
      console.log("fileUrl", fileUrl);
      setFile(fileUrl);
    }
  }

  const onLoadSuccess = ({ numPages }) => {
    console.log("numPage", numPages);
    setNumPages(numPages);
  };

  console.log("file", file);

  return (
    <div className="pdfMain_container">
      <div id="upload_your_invoice">Upload Your Invoice</div>
      <div id="populate_text">To auto-populate fields and save time</div>
      {!file && (
        <div id="pdf_container">
          <div id="left_div"></div>
          <div id="center_div">
            <LuListTodo id="LuListTodo" />
          </div>
          <div id="right_div"></div>
        </div>
      )}
      {file && (
        <div style={{ marginTop: "20px" }}>
          <Document file={file} onLoadSuccess={onLoadSuccess}>
            <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false}/>
          </Document>
        </div>
      )}
      <button id="upload_btn">
        {" "}
        <input
          type="file"
          id="file-upload"
          style={{ display: "none" }}
          onChange={onHadleSelectFile}
          accept="application/pdf"
        />
        <label
          htmlFor="file-upload"
          style={{ padding: "10px 25px", cursor: "pointer" }}
        >
          Upload File{" "}
          <span style={{ marginLeft: "7px" }}>
            <GoUpload />
          </span>{" "}
        </label>
      </button>
      <div id="click_to_upload">
        <span>Click to uplad</span> or Drag and drop
      </div>
    </div>
  );
}

export default PdfReader;
