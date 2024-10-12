"use client";

import Link from 'next/link';  // Use Next.js's Link
import styles from './about.module.css';

export default function About() {
    return (
        <div>
            <h1 className={styles.heading}><b>About Page</b></h1>
            <p className={styles.paragraph}><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur illo eos dolorum non corporis obcaecati, molestiae odio nisi quibusdam assumenda ex hic sed libero a sapiente, alias quo perspiciatis!</i></p>
            <br/>
            <Link href="/about/myskills"  className="hover:text-purple-400">
            <button className={styles.button}>
            Go to Nested Page
        </button>
      </Link>
          
        </div>
    );
}
