import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilter }) {
    return (
        <div className={css.container}>
            <p> Find contacts by name</p>
            <input type="text" name="search" className={css.input} value={filter} onInput={(event) => onFilter(event.target.value)} />
        </div>
    );
}
