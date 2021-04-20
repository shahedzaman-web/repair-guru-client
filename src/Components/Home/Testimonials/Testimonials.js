import React, { useEffect, useState } from "react";

import "./Testimonials.css";
// import wilson from "../../../image/wilson.png";
// import ema from "../../../image/ema.png";
// import aliza from "../../../image/aliza.png";
import Testimonial from "../Testimonial/Testimonial";

// const testimonialData = [
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
//     name: "Wilson Harry",
//     from: "California",
//     img: wilson,
//   },
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
//     name: "Ema Gomez",
//     from: "California",
//     img: ema,
//   },
//   {
//     quote:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
//     name: "Aliza Farari",
//     from: "California",
//     img: aliza,
//   },
// ];

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    fetch(`https://repair-guru-sz.herokuapp.com/reviewDetails`)
      .then((res) => res.json())
      .then((data) => setTestimonialData(data));
    console.log(testimonialData);
  });
  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header tab-pane text-center">
          <h5 className="text-primary text-uppercase">Testimonial</h5>
          <h1>
            What Our Customer <br /> Says{" "}
          </h1>
        </div>
        <div className="card-deck mt-5">
          {testimonialData.map((testimonial) => (
            <Testimonial
              testimonial={testimonial}
              key={testimonial.name}
            ></Testimonial>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
