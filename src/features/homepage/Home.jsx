import styled from "styled-components";

const Hero = styled.div`
  // .hero
  background-image: url("../../asset/img/bank-tree.jpeg");
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  @media (min-width: 920px) {
    height: 400px;
    background-position: 0% 33%;
  }
`;
const HeroContent = styled.section`
  // .hero-content
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;
  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`;

const H2 = styled.h2`
  // .sr-only
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important; /* 2 */
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important; /* 3 */
`;

const HeroSubtitle = styled.p`
  // .hero-content .subtitle
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media (min-width: 920px) {
    font-size: 1.5rem;
  }
`;

const HeroTxt = styled.p`
  // .hero-content .text
  margin-bottom: 0;
  font-size: 0.9rem;
  @media (min-width: 920px) {
    font-size: 1.2rem;
  }
`;

const Features = styled.section`
  // features
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`;

const FeatureItem = styled.div`
  // feature-item
  flex: 1;
  padding: 2.5rem;
`;

const FeatureIcon = styled.img`
  // .feature-icon
  width: 100px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
`;

const H3 = styled.h3`
  // .feature-item-title
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

function Home() {
  return (
    <>
      <Hero>
        <HeroContent>
          <H2>Promoted Content</H2>
          <HeroSubtitle>No fees.</HeroSubtitle>
          <HeroSubtitle>No minimum deposit.</HeroSubtitle>
          <HeroSubtitle>High interest rates.</HeroSubtitle>
          <HeroTxt>Open a savings account with Argent Bank today!</HeroTxt>
        </HeroContent>
      </Hero>
      <Features>
        <H2>Features</H2>
        <FeatureItem>
          <FeatureIcon src="./src/assets/img/icon-chat.png" alt="Chat Icon" />
          <H3>You are our #1 priority</H3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon src="./src/assets/img/icon-money.png" alt="Chat Icon" />
          <H3>More savings means higher rates</H3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </FeatureItem>
        <FeatureItem>
          <FeatureIcon
            src="./src/assets/img/icon-security.png"
            alt="Chat Icon"
          />
          <H3>Security you can trust</H3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </FeatureItem>
      </Features>
    </>
  );
}

export default Home;
