import Banners from "./banners-section";
import MiddleSection from "./middle-section";
import ButtonSection from "./botton-section";
import Destacados from "./destacados-section";

function Home() {
  return (
    <>
      <Banners></Banners>
      <MiddleSection></MiddleSection>
      <Destacados></Destacados>
      <ButtonSection></ButtonSection>
    </>
  );
}

export default Home;
