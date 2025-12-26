

export  function TestimonialCard({ testimonial }) {
  

  return (
     <div 
    
     className={`client-testimonial-card `}>
                 <div>
                  <figure>
                    <img src="" alt={testimonial.name} />
                  </figure>
                  <p className="clients-name FWB">
                    {testimonial.name}
                  </p>
                 </div>

                 <br />
                 <div className="testimonial-content">
                   <p>
                     {testimonial.quote}
                   </p>
                   <span>location: {testimonial.location}</span>
                 </div>
              </div>
  );
}