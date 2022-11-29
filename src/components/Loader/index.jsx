import React, { useContext } from "react";
import { SyncLoader } from "react-spinners";
import { Theme } from "../../contexts/Theme";

const Loader = () => {

    const { themeColor } = useContext(Theme);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 50px)",
                overflow: "hidden!important",
            }}
        >
            <SyncLoader color={themeColor === "dark" ? "white" : "black"} size= {25}/>
        </div>
    );
};

export default Loader;
