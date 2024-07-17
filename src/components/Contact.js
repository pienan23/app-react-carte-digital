import "../styles.css";
import Button from "./Button";

const linkeldn = {
  color: "white",
  background: "white",
};
export default function Contact() {
  return (
    <>
      <section className="contact">
        <Button
          btn="button1"
          icone="fa-regular fa-envelope"
          link="pieeenn"
          name="Email"
        />
        <Button
          btn="button2"
          icone="fa-brands fa-linkedin-in"
          link="pieeenn"
          name="Linkeldn"
        />
      </section>
    </>
  );
}

//
