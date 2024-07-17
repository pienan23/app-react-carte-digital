import "../styles.css";
import "../main.css";
import Profil from "./Profil";
import Contact from "./Contact";
import AboutExperience from "./AboutExperience";

export default function Main() {
  return (
    <div className="Main">
      <Profil />
      <div className="container">
        <section className="presentation">
          <h1>Yuu pienan</h1>
          <h2>Data analyst and dev fontend</h2>
          <p>rue A7 plateau</p>
        </section>

        <Contact />

        <AboutExperience />
      </div>
    </div>
  );
}
