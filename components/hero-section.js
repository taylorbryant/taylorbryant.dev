import Container from "./container";

function Hero(props) {
  return (
    <section className="bg-gradient-green-blue py-24">
      <Container>{props.children}</Container>
    </section>
  );
}

export default Hero;