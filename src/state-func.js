import React from "react";

export default function StateFunc() {
    let [text, setText] = React.useState("Hello");
    let [size, setSize] = React.useState(16);

    const onCilckSetText = () => {
        let t = prompt("กำหนดข้อความ")
        if(t){
            setText(t)
        }
    }

    const onClickZoomIn = () => {
        let newSize = size + 1
        setSize(newSize)
    }

    let msgboxStyle = {
        display: "inline-block",
        width:350,
        fontSize: size,
        backgroundColor: "#ccc",
        padding: 5,
        textAlign: "left",
    }

    return(
        <div style={{textAlign:'center',marginTop:'20px'}}>
            <div style={msgboxStyle}>{text}</div><br/><br/>
            <button onClick={onCilckSetText}>ข้อความ</button>&nbsp;
            <button onClick={onClickZoomIn}>เพิ่มขนาด</button>&nbsp;
            <button onClick={()=>setSize(size - 1)}>ลดขนาด</button>
        </div>
    )
}