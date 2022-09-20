import { useFilePicker } from "use-file-picker";
import React from "react";

export default function Image() {
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    accept: "image/*",
    multiple: true,
    limitFilesConfig: { max: 1 },
    // minFileSize: 0.1, // in megabytes
    maxFileSize: 50,
    // imageSizeRestrictions: {
    //   maxHeight: 900, // in pixels
    //   maxWidth: 1600,
    //   minHeight: 600,
    //   minWidth: 768,
    // },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (errors.length) {
    return <div>Error...</div>;
  }

  return (
    <div>
      {/* <input
        type={"file"}
        inputMode={"numeric"}
        onInputCapture={() => console.log("input")}
        onChange={() => console.log("change")}
      /> */}
      <button onClick={() => openFileSelector()}>Select files </button>
      <br />
      {filesContent.map((file, index) => {
        console.log(file.content)(
          <div key={index}>
            <h2>{file.name} Picture</h2>
            <img alt={file.name} src={file.content}></img>
            <br />
          </div>
        );
      })}
    </div>
  );
}
