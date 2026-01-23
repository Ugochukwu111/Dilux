import { diluxFaqs } from "../../content";
import { FaqsCard } from "../Pages/Faqs";

export function  FaqSection() {
  return (
     <section className="faq-section">
          <div className="container ">
            <h3 className="text-center text-white">
              Frequently Asked Questions
            </h3>
            {diluxFaqs.map((faq) => {
              return <FaqsCard key={faq.id} faq={faq} />;
            })}
          </div>
        </section>
  )
}
