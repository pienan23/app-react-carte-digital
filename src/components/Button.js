import "../styles.css";
export default function Button(props) {
  return (
    <>
      <div className={props.btn}>
        {props.style}
        <i class={props.icone}></i>
        <a href={props.link}>{props.name}</a>
      </div>
    </>
  );
}
// ""
