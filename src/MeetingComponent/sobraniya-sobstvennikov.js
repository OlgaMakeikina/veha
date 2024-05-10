import React, { useState } from "react";
import './meeting.css';
import { meetingData } from "./meetingData";
import Footer from "../FooterComponent/footer";

const Meeting = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = meetingData.filter((item) =>
    item.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>
    <div>
      <div className="cont_header_meeting">
        <h2 className="main_header_meeting"><span className="span_header_meeting">Жителям/ </span>Собрания собственников</h2>
      </div>
      <input
        className="input_meeting"
        type="text"
        placeholder="Введите название улицы"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="meeting_cont">
        <div className="meeting_box">
          <h4>№ п/п</h4>
          <h4>Адрес дома</h4>
          <h4>№ протокола</h4>
          <h4>Дата протокола</h4>
          <h4>Решение собрания</h4>
        </div>
        {filteredData.map(item => (
          <div className="meeting_box" key={item.id}>
            <p>{item.id}</p>
            <p>{item.address}</p>
            <p>{item.protocolNumber}</p>
            <p>{item.protocolDate}</p>
            <p>{item.decision}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    </section>
  )
};

export default Meeting;