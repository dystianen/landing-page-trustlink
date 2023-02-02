import React, {useState} from 'react';
import StickyHeader from '../components/StickyHeader';
import Home from '../components/v2/Home';
import WhyUs from '../components/v2/WhyUs';
import Business from '../components/v2/Business';
import TrustedBy from '../components/TrustedBy';
import Developer from '../components/v2/Developer';
import Certification from '../components/v2/Certification';
import ContactUs from '../components/v2/ContactUs';
import Footer from '../components/v2/Footer';

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickProduct = (index) => {
    setIndexProduct(index);
    setIsOpen(false);
    sectionProductRef.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div>
      <StickyHeader
        changeMenuOpen={setIsOpen}
        isMenuOpen={isOpen}
        onClickProduct={handleClickProduct}
        onClickContactUs={() => {
          scrollToSpecificY(contactUsRef.current, {
            scroll_margin_top: 96,
          });
        }}
        onClickClients={() => {
          scrollToSpecificY(clientsRef.current, {
            scroll_margin_top: 80,
          });
        }}
        onClickUseCases={() => {
          scrollToSpecificY(useCasesRef.current, {
            scroll_margin_top: 80,
          });
        }}
        onClickAboutUs={() => {
          scrollToSpecificY(aboutUsRef.current, {
            scroll_margin_top: 96,
          });
        }}
        onClickTopPage={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        frontPage
      />

      <section className={'-mt-36'}>
        <Home />
      </section>
      <section>
        <WhyUs />
      </section>
      <section>
        <Business />
      </section>
      <section>
        <TrustedBy />
      </section>
      <section>
        <Developer />
      </section>
      <section>
        <Certification />
      </section>
      <section>
        <ContactUs />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
