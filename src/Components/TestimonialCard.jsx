import { MapPin } from "lucide-react";

export function TestimonialCard({ testimonial }) {
  return (
    <div className={`client-testimonial-card `}>
      <figure>
        <img src={testimonial.image} alt= {testimonial.name} />
        <figcaption>
          <p>
            <span className="FWB text-dark-gray">Name:</span>&nbsp;
           <span>{testimonial.name}</span>
          </p>
          <p>
            <span className="FWB text-dark-gray">Title:</span> &nbsp;
            <span>{testimonial.job}</span> 
          </p>
        </figcaption>
      </figure>
        <div className="testimonial-content">
          <p>{testimonial.quote}</p>
          <br />
          <span> <MapPin /> location: {testimonial.location}</span>
        </div>
    </div>
  );
}
