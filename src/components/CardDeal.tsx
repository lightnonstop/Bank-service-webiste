import { Button } from "."
import { card } from "../assets"
import styles, { layout } from "../style"

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo} max-ss:items-center`}>
        <h2 className={`${styles.heading2} max-ss:text-center`}>
          Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 max-ss:text-center`}>
          Qui ut molestiae incidunt, accusamus sequi dolor consequuntur ullam. Sit soluta perferendis a ipsa, excepturi nam voluptate et.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-full h-full" />
      </div>  
    </section>
  )
}
export default CardDeal