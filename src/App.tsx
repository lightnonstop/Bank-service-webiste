import { Billing, Business, CardDeal, Clients, Cta, Footer, Hero, Navbar, Stats, Testimonial } from './components';
import styles from './style';
const App = () => (
  <div className={`bg-primary w-full overflow-hidden`}>
    <div>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>


    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonial />
        <Clients />
        <Cta />
        <Footer />
      </div>
    </div>
  </div>
);
export default App