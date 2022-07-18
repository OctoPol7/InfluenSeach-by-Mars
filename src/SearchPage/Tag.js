import React from 'react';
// import { useState } from "react";

const Tag = props => {

  // const [topic, setTopic] = useState('');

    // const youTubeTopicIds = {
    //   "/m/04rlf": {
    //     topic: "music",
    //   },
    //   "/m/05fw6t": {
    //     topic: "Children's music",
    //   },
    //   "/m/02mscn": {
    //     topic: "Christian music",
    //   },
    //   "/m/01lyv": {
    //     topic: "Country",
    //   },
    //   "/m/02lkt": {
    //     topic: "Electronic music",
    //   },
    //   "/m/0glt670": {
    //     topic: "Hip hop music",
    //   },
    //   "/m/05rwpb": {
    //     topic: "Independent music",
    //   },
    //   "/m/03_d0": {
    //     topic: "Jazz",
    //   },
    //   "/m/028sqc": {
    //     topic: "Music of Asia",
        
    //   },
    //   "/m/0g293": {
    //     topic: "Music of Latin America",
        
    //   },
    //   "/m/064t9":{
    //     topic: "Pop music",
        
    //   },
    //   "/m/06cqb":{
    //     topic: "Reggae",
        
    //   },
    //   "/m/06j6l":{
    //     topic: "Rhythm and blues",
        
    //   },
    //   "/m/06by7":{
    //     topic: "Rock music",
        
    //   },
    //   "/m/0gywn":{
    //     topic: "Soul music",
        
    //   },
    //   "/m/0bzvm2":{
    //     topic: "Gaming",
        
    //   },
    //   "/m/025zzc":{
    //     topic: "Action game",
        
    //   },
    //   "/m/02ntfj":{
    //     topic: "Action-adventure game",
        
    //   },
    //   "/m/0b1vjn":{
    //     topic: "Casual game",
        
    //   },
    //   "/m/02hygl":{
    //     topic: "Music video game ",
        
    //   },
    //   "/m/01sjng":{
    //     topic: "Puzzle video game ",
        
    //   },
    //   "/m/04q1x3q":{
    //     topic: "Racing video game ",
        
    //   },
    //   "/m/0403l3g":{
    //     topic: "Puzzle video game ",
        
    //   },
    //   "/m/0403l3g":{
    //     topic: "Role-playing video game ",
        
    //   },
    //   "/m/021bp2":{
    //     topic: "Simulation video game ",
        
    //   },
    //   "/m/022dc6":{
    //     topic: "Sports game ",
        
    //   },
    //   "/m/03hf_rm":{
    //     topic: "Strategy video game ",
        
    //   },
    //   "/m/06ntj":{
    //     topic: "Sports",
        
    //   },
    //   "/m/0jm_":{
    //     topic: "American football",
        
    //   },
    //   "/m/018jz":{
    //     topic: "Baseball ",
        
    //   },
    //   "/m/01cgz":{
    //     topic: "Boxing",
        
    //   },
    //   "/m/09xp_":{
    //     topic: "Cricket",
        
    //   },
    //   "/m/02vx4":{
    //     topic: "Football",
        
    //   },
    //   "/m/037hz":{
    //     topic: "Golf",
        
    //   },
    //   "/m/03tmr":{
    //     topic: "Ice hockey",
        
    //   },
    //   "/m/01h7lh":{
    //     topic: "Mixed martial arts",
        
    //   },
    //   "/m/0410tth":{
    //     topic: "Motorsport",
        
    //   },
    //   "/m/066wd":{
    //     topic: "Professional wrestling",
        
    //   },
    //   "/m/07bs0":{
    //     topic: "Tennis",
        
    //   },
    //   "/m/07_53":{
    //     topic: "Volleyball",
        
    //   },
    //   "/m/02jjt":{
    //     topic: "Entertainment",
        
    //   },
    //   "/m/095bb":{
    //     topic: "Animated cartoon",
        
    //   },
    //   "/m/05qjc":{
    //     topic: "Performing arts",
        
    //   },
    //   "/m/09kqc":{
    //     topic: "Humor",
        
    //   },
    //   "/m/02vxn":{
    //     topic: "Movies",
        
    //   },
    //   "/m/019_rr":{
    //     topic: "Lifestyle",
        
    //   },
    //   "/m/032tl":{
    //     topic: "Fashion",
        
    //   },
    //   "/m/027x7n":{
    //     topic: "Fitness",
        
    //   },
    //   "/m/02wbm":{
    //     topic: "Food",
        
    //   },
    //   "/m/0kt51":{
    //     topic: "Health",
        
    //   },
    //   "/m/03glg":{
    //     topic: "Hobby",
        
    //   },
    //   "/m/068hy":{
    //     topic: "Pets",
        
    //   },
    //   "/m/041xxh":{
    //     topic: "Physical attractiveness [Beauty]",
        
    //   },
    //   "/m/07c1v":{
    //     topic: "Technology",
        
    //   },
    //   "/m/07bxq":{
    //     topic: "Tourism",
        
    //   },
    //   "/m/07yv9":{
    //     topic: "Vehicles",
        
    //   },
    //   "/m/01k8wb":{
    //     topic: "Knowledge",
        
    //   },
    //   "/m/098wr":{
    //     topic: "Society",
        
    //   },
    // };





    const youTubeTopicIds = [
      {
        topic: "music",
        id: "/m/04rlf",
      },
      {
        topic: "Children's music",
        id: "/m/05fw6t",
      },
      {
        topic: "Christian music",
        id: "/m/02mscn",
      },
      {
        topic: "Country",
        id: "/m/01lyv",
      },
      {
        topic: "Electronic music",
        id: "/m/02lkt",
      },
      {
        topic: "Hip hop music",
        id: "/m/0glt670",
      },
      {
        topic: "Independent music",
        id: "/m/05rwpb",
      },
      {
        topic: "Jazz",
        id: "/m/03_d0",
      },
      {
        topic: "Music of Asia",
        id: "/m/028sqc",
      },
      {
        topic: "Music of Latin America",
        id: "/m/0g293",
      },
      {
        topic: "Pop music",
        id: "/m/064t9",
      },
      {
        topic: "Reggae",
        id: "/m/06cqb",
      },
      {
        topic: "Rhythm and blues",
        id: "/m/06j6l",
      },
      {
        topic: "Rock music",
        id: "/m/06by7",
      },
      {
        topic: "Soul music",
        id: "/m/0gywn",
      },
      {
        topic: "Gaming",
        id: "/m/0bzvm2",
      },
      {
        topic: "Action game",
        id: "/m/025zzc",
      },
      {
        topic: "Action-adventure game",
        id: "/m/02ntfj",
      },
      {
        topic: "Casual game",
        id: "/m/0b1vjn",
      },
      {
        topic: "Music video game ",
        id: "/m/02hygl",
      },
      {
        topic: "Puzzle video game ",
        id: "/m/01sjng",
      },
      {
        topic: "Racing video game ",
        id: "/m/04q1x3q",
      },
      {
        topic: "Puzzle video game ",
        id: "/m/0403l3g",
      },
      {
        topic: "Role-playing video game ",
        id: "/m/0403l3g",
      },
      {
        topic: "Simulation video game ",
        id: "/m/021bp2",
      },
      {
        topic: "Sports game ",
        id: "/m/022dc6",
      },
      {
        topic: "Strategy video game ",
        id: "/m/03hf_rm",
      },
      {
        topic: "Sports",
        id: "/m/06ntj",
      },
      {
        topic: "American football",
        id: "/m/0jm_",
      },
      {
        topic: "Baseball ",
        id: "/m/018jz",
      },
      {
        topic: "Boxing",
        id: "/m/01cgz",
      },
      {
        topic: "Cricket",
        id: "/m/09xp_",
      },
      {
        topic: "Football",
        id: "/m/02vx4",
      },
      {
        topic: "Golf",
        id: "/m/037hz",
      },
      {
        topic: "Ice hockey",
        id: "/m/03tmr",
      },
      {
        topic: "Mixed martial arts",
        id: "/m/01h7lh",
      },
      {
        topic: "Motorsport",
        id: "/m/0410tth",
      },
      {
        topic: "Professional wrestling",
        id: "/m/066wd",
      },
      {
        topic: "Tennis",
        id: "/m/07bs0",
      },
      {
        topic: "Volleyball",
        id: "/m/07_53",
      },
      {
        topic: "Entertainment",
        id: "/m/02jjt",
      },
      {
        topic: "Animated cartoon",
        id: "/m/095bb",
      },
      {
        topic: "Performing arts",
        id: "/m/05qjc",
      },
      {
        topic: "Humor",
        id: "/m/09kqc",
      },
      {
        topic: "Movies",
        id: "/m/02vxn",
      },
      {
        topic: "Lifestyle",
        id: "/m/019_rr",
      },
      {
        topic: "Fashion",
        id: "/m/032tl",
      },
      {
        topic: "Fitness",
        id: "/m/027x7n",
      },
      {
        topic: "Food",
        id: "/m/02wbm",
      },
      {
        topic: "Health",
        id: "/m/0kt51",
      },
      {
        topic: "Hobby",
        id: "/m/03glg",
      },
      {
        topic: "Pets",
        id: "/m/068hy",
      },
      {
        topic: "Physical attractiveness [Beauty]",
        id: "/m/041xxh",
      },
      {
        topic: "Technology",
        id: "/m/07c1v",
      },
      {
        topic: "Tourism",
        id: "/m/07bxq",
      },
      {
        topic: "Vehicles",
        id: "/m/07yv9",
      },
      {
        topic: "Knowledge",
        id: "/m/01k8wb",
      },
      {
        topic: "Society",
        id: "/m/098wr",
      }
    ];

    // console.log(props.name)

    const found = youTubeTopicIds.find((obj) => (obj.id === props.name));

    // console.log(found);

        return (
          <>
            {found === undefined ? (
              <></>
            ) : (
              <li
                className={`tag ${props.className ? props.className : ""}`}
              >
                {found.topic}
              </li>
            )}
          </>
        );

  }

export default Tag;