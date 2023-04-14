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
          <div className={styles.card}>
            <section className={styles.left}>
              <h2>About Us</h2>
              <p>
                Eccles Community Chess is an extention of Eccles Chess Club for
                people from surrounding arears who want to play friendly and ECF
                rated tournaments. Eccles Community Chess (ECC) is a non-profit
                organisation dedicated to: promoting the joys and benefits of
                playing chess; and holding weekly games and chess tournaments
                both over the board (OTB) and Online. We are a friendly and
                sociable club with over 30 active members with more players
                joining all the time. You will be made to feel very welcome no
                matter what your chess background, culture or nationality.
              </p>
            </section>
            <section className={styles.right}>
              <h2>Contact Us</h2>
              <p>
                If you would like to join, or are interested in finding out more
                about Eccles community Chess Club it would be great to hear from
                you via the contact details below. You are more than welcome to
                come to the to join us at The Station Bar on our Wednesday club
                nights for an informal chat, refreshments and a game of chess.
                All ages and levels of play welcome! We have recently started
                playing Online RapidPlay, Blitz and Bullet live tournaments via
                Lichess https://lichess.org/team/eccles-chess-club and are
                looking for new players to join us playing Online. Over The
                Board chess has started up again after lockdown for standard,
                RapidPlay and Blitz chess for both friendly and ECF rated
                tournaments. For all enquiries please email:
                eccleschess@gmail.com or speak to Barbara on 07743888585 Eccles
                Community Chess Club - Keeping Chess Live
              </p>
            </section>
          </div>
        </main>
      </Container>
    </div>
  );
};

export default Home;
