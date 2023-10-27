import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { Avatar } from "@material-ui/core";
const Widgets = () => {
  const newsArticle = (heading, subtitle, avatar, contact) => (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        {avatar ? (
          avatar.length === 1 ? (
            <Avatar>{avatar}</Avatar>
          ) : (
            <Avatar src={avatar} />
          )
        ) : (
          <FiberManualRecordIcon />
        )}
      </div>
      <div className='widgets_articleRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
        <p><a style={{ textDecoration: 'none', color: "inherit" }} href={`mailto:${contact}`}>{contact}</a></p>
      </div>
    </div >
  );
  return (
    <div className='widgets'>
      <div className='widgets_top'>
        <div className='widgets_header'>
          <h2>Contact Contributors</h2>
          <InfoIcon />
        </div>
        {newsArticle("Neel Rana", "Full stack developer", "https://avatars.githubusercontent.com/u/88571510?v=4", "neelrana.it20@scet.ac.in")}
        {newsArticle(
          "Shiv Kadiwala",
          "Web developer",
          "https://avatars.githubusercontent.com/u/110624034?v=4",
          "shivkadiwala.it20@scet.ac.in"
        )}
        {newsArticle(
          "Utsav Desai",
          "Cyber Security Expert",
          "https://lh3.googleusercontent.com/a-/ALV-UjVsjc76nDAo0nNKCQ79PybksYAutvKJIIyRj2lTYyl7jw=s72-p-k-rw-no",
          "utsavdesai.it20@scet.ac.in"
        )}
        {newsArticle(
          "Rohit Sonvane",
          "Software Engineer",
          "R",
          "rohitsonavare.it20@scet.ac.in"
        )}
      </div>
      <div className='widgets_bottom'>
        <div className='widgets_header'>
          <h2>Today’s top courses</h2>
          <InfoIcon />
        </div>
        {newsArticle("Executive Influence", "John Ullmen")}
        {newsArticle("Customer Service Foundations", "Jeff Toister")}
        {newsArticle("Communication within Teams", "Daisy Lovelace")}
      </div>
    </div>
  );
};

export default Widgets;
