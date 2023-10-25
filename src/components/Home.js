import React from "react";
import styles from "./Home.module.css";
import Activity from "./Activity";

const activities = [
  {
    title: "Birthday Parties",
    description: "Celebrate your special day on the open sea!🎂",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50qhaFsAfw4Dxuqg1b-9SXEGOhlQIkNp5kQ&usqp=CAU",
  },
  {
    title: "Bridal Showers",
    description: "Throw the best Bridal Showers with us!💐",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-WXdxEjEGNjPnopYQ0R7wqmTprzUHFhkHPQ&usqp=CAU",
  },
  {
    title: "Wedding Anniversaries",
    description: "Make the day memorable for both of you.💝",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWNkfr2p4IPwhEe0oOdyK6PtDxWRWFKF37Q&usqp=CAU",
  },
  {
    title: "Corporate Events",
    description: "Host the best Corporate Events out in the sea.💼",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD3DYc7VV3RBw3q-4zKcqYfyKpwGs2zFBmVEMRuWV6lGM1FT_NyYOHnSYKHrRtw0OrAE&usqp=CAU",
  },
  {
    title: "Baby Showers",
    description: "The best way to welcome a new member to the family!!👶",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIgSqvTxeFpi6-0hb4DkWH35cUmwzVwvad0w&usqp=CAU",
  },
  {
    title: "Kitty Parties",
    description: "Lowkey and wild is the way for em Kitties.🥳🥂",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxujogpT4Hz323SbtwZuR6zhdnrfgas1_Cag&usqp=CAU",
  },
  {
    title: "Seminars",
    description: "Host the best seminars among the calm and tranquil sea.🤝",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKJy04-koAo6TpbAM4_pS2apssBa19AEGsQ&usqp=CAU",
  },
  {
    title: "Bachelorette Parties",
    description: "Time to let loose and have a good time!🍻",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZLQ5wWHJVbuscNdSQ2eMJpyJvMeowkq9GA&usqp=CAU",
  },
  {
    title: "Destination Weddings",
    description:
      "Make your specail day unforgettable and even more special with us!💍",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcND6pVxdwg3GN-j7PMXUy2soNGQH7U8rAJg&usqp=CAU",
  },
];

const Home = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>Let's Go Jolly!!! 🚢</h1>
          <h3 className={styles.subtitle}>
            Set sail on the open seas with our amazing cruise ship! ⚓️
          </h3>
        </div>
        <img
          className={styles.image}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8tLw5eiXJiwRypwVnydR0zbhOkp4kKODpjg&usqp=CAU"
          alt="Cruise Ship"
        />
        <div></div>
      </div>
      <div className={styles.activitiesContainer}>
        {activities.map((activity, index) => (
          <Activity key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default Home;
