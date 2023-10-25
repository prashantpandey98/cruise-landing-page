import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>About Us</div>
      <div style={styles.content}>
        <p style={styles.heading}>
          Welcome aboard! At Jolly Roger, we pride ourselves on being more than
          just a boat on the water. We offer a luxurious and versatile venue for
          your special occasions. Imagine your next event on the shimmering
          waters, surrounded by breathtaking views and unparalleled luxury.
        </p>
        <p style={styles.why}>
          <strong>Why Choose Us:</strong>
        </p>
        <ul style={styles.list}>
          <li>
            Unmatched Elegance: Step aboard our meticulously designed cruise,
            where every detail exudes elegance. Our vessel is a seamless blend
            of contemporary design and classic charm, ensuring a sophisticated
            ambiance for your events.
          </li>
          <li>
            Perfect for Every Occasion: From intimate birthday parties to grand
            corporate events, we cater to a diverse range of occasions. Whether
            it's a romantic wedding anniversary, a lively bachelorette party, or
            a professional corporate seminar, our cruise provides the ideal
            backdrop.
          </li>
          <li>
            Customized Experiences: We understand that every event is unique.
            Our dedicated team works closely with you to tailor the cruise
            experience to your specific requirements. From themed decor to
            specialized catering, we transform your visions into reality.
          </li>
          <li>
            Professional Crew: Our experienced and friendly crew members are
            committed to ensuring your event is seamless and enjoyable. From the
            moment you step aboard until the last guest disembarks, our crew
            handles every detail with professionalism and care.
          </li>
          <li>
            Scenic Cruises: Sail away with us and explore picturesque waterways.
            Whether it's a sunset cruise for a romantic evening or a daytime
            voyage for a corporate retreat, our cruises offer stunning vistas,
            creating unforgettable memories.
          </li>
          <li>
            Culinary Delights: Indulge in exquisite culinary creations prepared
            by our talented chefs. From delectable appetizers to gourmet entrees
            and decadent desserts, our menu options are designed to tantalize
            your taste buds.
          </li>
          <li>State-of-the-Art Amenities: Our cruise is equipped with...</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background:
      'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3pWcvWXHl7Ak7pjpgcHxqasUspZeM4rmmw&usqp=CAU") center/cover no-repeat',
    height: "100%",
    padding: "40px",
    textAlign: "center",
    color: "white",
  },
  heading: {
    color: "black",
    fontWeight: "700",
  },
  header: {
    fontSize: "36px",
    fontWeight: "800",
    marginBottom: "20px",
    color: "red",
  },
  why: {
    color: "red",
  },
  content: {
    fontSize: "18px",
    lineHeight: "1.6",
  },
  list: {
    listStyleType: "circle",
    textAlign: "left",
    marginLeft: "30px",
    marginTop: "15px",
  },
};

export default About;
