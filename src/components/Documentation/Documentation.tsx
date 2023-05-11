import React from "react";
import sm1 from "./img/sm1.jpg";
import sm2 from "./img/sm2.jpg";
import sm3 from "./img/sm3.jpg";
import sm4 from "./img/sm4.jpg";
import sm5 from "./img/sm5.jpg";
import sm6 from "./img/sm6.jpg";
import sm7 from "./img/sm7.jpg";
import sm8 from "./img/sm8.jpg";
import sm9 from "./img/sm9.jpg";
import md1 from "./img/md1.jpg";
import md2 from "./img/md2.jpg";
import md3 from "./img/md3.jpg";
import md4 from "./img/md4.jpg";
import md5 from "./img/md5.jpg";
import md6 from "./img/md6.jpg";
import md7 from "./img/md7.jpg";
import lg1 from "./img/md1.jpg";
import lg2 from "./img/md2.jpg";
import lg3 from "./img/md3.jpg";
import lg4 from "./img/md4.jpg";
import lg5 from "./img/md5.jpg";
import xl1 from "./img/md1.jpg";
import xl2 from "./img/md2.jpg";
import xl3 from "./img/md3.jpg";
import xl4 from "./img/md4.jpg";
import xl5 from "./img/md5.jpg";

import styles from "./documentation.module.scss";

export const Documentation = () => {
  const link = "#";

  return (
    <div className={styles.doc}>
      <div className={styles.box_doc}>
        <a className={styles.button_popup_doc} href="#popup1_doc">
          Documantation
        </a>
      </div>

      <div id="popup1_doc" className={styles.overlay_doc}>
        <div className={styles.popup_doc}>
          <h2>Techologies: </h2>
          <h3>TypeScript, React, SCSS, HTML</h3>
          <h2>Responsive Layout: NO</h2>
          <h3>Adaptive Layout: 320px, 480px, 768px, 1920px </h3>
          <h4>Libraries: "gh-pages", "classnames" </h4>

          <div className={styles.buttonWrapper}>
            <a
              href="https://thecapncoder.github.io/gravity/"
              rel="noreferrer"
              target="_blank"
            >
              <button>Git Hub</button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.figma.com/file/HL5OHKgu4Od5UAWqx8CM7P/%5BPublished%5D%5BEN%5D-%C2%ABGravity%C2%BB?node-id=0-1&t=QHe2IcFSbPXw8vJb-0"
            >
              <button>Figma</button>
            </a>
          </div>

          <a className={styles.close_doc} href={link}>
            &times;
          </a>
          <div className={styles.content_doc}>
            <div className={styles.divider}></div>
            <img src={sm1} alt="sm" />
            <img src={sm2} alt="sm" />
            <img src={sm3} alt="sm" />
            <img src={sm4} alt="sm" />
            <img src={sm5} alt="sm" />
            <img src={sm6} alt="sm" />
            <img src={sm7} alt="sm" />
            <img src={sm8} alt="sm" />
            <img src={sm9} alt="sm" />
            <div className={styles.divider}></div>
            <img src={md1} alt="md" />
            <img src={md2} alt="md" />
            <img src={md3} alt="md" />
            <img src={md4} alt="md" />
            <img src={md5} alt="md" />
            <img src={md6} alt="md" />
            <img src={md7} alt="md" />
            <div className={styles.divider}></div>
            <img src={lg1} alt="lg" />
            <img src={lg2} alt="lg" />
            <img src={lg3} alt="lg" />
            <img src={lg4} alt="lg" />
            <img src={lg5} alt="lg" />
            <div className={styles.divider}></div>
            <img src={xl1} alt="md" />
            <img src={xl2} alt="md" />
            <img src={xl3} alt="md" />
            <img src={xl4} alt="md" />
            <img src={xl5} alt="md" />
            <div className={styles.divider}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
