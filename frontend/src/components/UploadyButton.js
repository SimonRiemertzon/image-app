import React from "react";
import { asUploadButton } from "@rpldy/upload-button";

const DivUploadButton = asUploadButton((props) => {
    return <div {...props} style={{ cursor: "pointer" }}>
        UPLOADY BUTTON.JS
    </div>
});

export default DivUploadButton