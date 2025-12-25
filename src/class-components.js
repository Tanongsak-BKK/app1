import React,{Component} from 'react';

export default class Calendar extends Component {
    getDate(){
        const dayNames = ['วันอาทิตย์','วันจันทร์','วันอังคาร','วันพุธ','วันพฤหัสบดี','วันศุกร์','วันเสาร์'];
        const monthNames = ['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน',
                            'พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม',
                            'กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'];
        const date = new Date();
        const weekDay = dayNames[date.getDay()];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear()+543;
        return `${weekDay} ที่ ${day} ${month} พ.ศ. ${year}`;
    }
    render(){
        return(
            <div style={{textAlign:'center', marginTop:20, fontSize:20, color:'black'}}>
                {this.getDate()}
            </div>
        )
    }
}