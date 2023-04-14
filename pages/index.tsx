import type { NextPage } from "next";
import Banner from "../components/banner";
import chessImage from "../public/images/homepage.jpg";
import { Container } from "../components/container";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Banner imgPath={chessImage} />
      <Container>
        <main>
          <div className={styles.standard}>
            <h3>
              <em>
                &quot;Eccles chess players exhibit clarity of thought, decisive
                action and the determination to win...&quot;
              </em>
            </h3>
            <h4>
              <p>ECCLES COMMUNITY CHESS - Keeping Chess Live</p>
            </h4>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Home;
