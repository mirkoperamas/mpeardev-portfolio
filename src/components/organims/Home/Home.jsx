import classes from "./home.module.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  PageContainer,
  Title,
  Subtitle,
  FooterHome,
  ButtonsHome,
  SocialIconsHome,
  Animatedlogo,
} from "../../../components";

export function Home({ breakpoint, openComingModal }) {
  return (
    <section className={classes.home}>
      <PageContainer>
        <div className={classes.home__content}>
          <div className={classes.home__main}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
              }}
            >
              <div className={classes.home__about}>
                <div>
                  <Title size={breakpoint >= 1280 ? "80px" : "60px"}>
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        strings: ["Mirko Peramás", "mpeardev"],
                      }}
                    />
                  </Title>
                </div>
                <div>
                  <Subtitle title={"frontend developer"} />
                </div>
                <div className={classes.home__aboutResume}>
                  <p>
                    Hola! me llamo Mirko, aficionado del desarrollo web y la
                    tecnología. Actualmente me especializo como desarrollador
                    Frontend, con experiencia en creación de templates y
                    aplicaciones web.<a onClick={openComingModal}> Aquí</a>{" "}
                    puedes saber un poco más sobre mí y revisar algunos de mis
                    proyectos y colaboraciones.
                  </p>
                </div>
                <ButtonsHome
                  breakpoint={breakpoint}
                  openComingModal={openComingModal}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.5,
              }}
            >
              <div className={classes.home__image}>
                <Animatedlogo />
              </div>
            </motion.div>
          </div>
          <SocialIconsHome breakpoint={breakpoint} />
          <FooterHome />
        </div>
      </PageContainer>
    </section>
  );
}
