import styles from './nested.module.css';

export default function NestedPage() {
    return (
        <div>
            <h1 className={styles.heading}><b>This is my Skills Nested Page</b></h1>
            <br/>
            <p className={styles.paragraph}><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nesciunt neque dolorem nemo tenetur commodi. Quia similique delectus sequi dolor accusantium! Possimus repudiandae saepe quasi voluptatum. Soluta ratione distinctio iusto.</i></p>
        </div>
    );
}
