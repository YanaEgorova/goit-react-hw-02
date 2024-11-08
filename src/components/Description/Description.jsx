import css from "./Description.module.css";

export default function Description({ title, desc }) {
  return (
    <div className={css.block}>
      <h1 className={css.title}>{title}</h1>
      <p className={css.desc}>{desc}</p>
    </div>
  );
}
