import s from './Section.module.css';
import Container from '../Container';

const Section = ({ nameForClass, children }) => (
  <section className={s[`${nameForClass}`]}>
    <Container>{children}</Container>
  </section>
);

export default Section;
