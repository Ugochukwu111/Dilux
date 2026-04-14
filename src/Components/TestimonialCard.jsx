
export function TestimonialCard({ testimonial }) {
  return (
    <div className={`client-testimonial-card `}>
        <div className="testimonial-content">
          <p>{testimonial.quote}</p>
          <br />
          <p className="client-name FWB">— {testimonial.name}</p>
        </div>
    </div>
  );
}
