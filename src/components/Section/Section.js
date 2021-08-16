import s from './Section.module.css';
import Container from '../Container';

const Section = ({ children }) => (
  <section className={s.section}>
    <Container>{children}</Container>
  </section>
);

export default Section;
