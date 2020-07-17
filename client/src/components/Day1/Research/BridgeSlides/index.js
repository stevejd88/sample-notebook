import React, { Fragment, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import Beam from "../../../../assets/img/obq/beam.png";
import Arch from "../../../../assets/img/obq/arch2.png";
import Float from "../../../../assets/img/obq/floating.png";
import Susp from "../../../../assets/img/obq/suspension3.jpg";
// import "./mars.scss";

function BridgeSlides() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Fragment>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        touch={true}
        keyboard={true}
        nextIcon={
          <span aria-hidden='true' className='carousel-control-next-icon' />
        }
      >
        <Carousel.Item>
          <img className='d-block w-100' src={Beam} alt='beam bridge' />
          <h3>Beam bridge</h3>
          <p>
            A simple beam bridge is a rigid horizontal structure supported by
            two ends called abutments. Beam bridges can span up to 500 meters in
            length. Most beam bridges can support light to moderate loads. Beam
            bridges are usually permanent structures and can be constructed
            quickly.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={Susp} alt='Suspension bridge' />
          <h3>Suspension Bridge</h3>
          <p>
            A suspension bridge is composed of a roadbed that is attached to or
            suspended from cables. Suspension bridges are permanent structures
            that can span over 2,300 meters. They can support moderate to heavy
            loads and take a long time to construct.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={Arch} alt='Arch bridge' />
          <h3>Arch Bridge</h3>
          <p>
            An arch bridge is composed of a curved structure with abutments on
            each end. They are permanent structures that can span up to 600
            meters. Arch bridges can carry heavy loads and take a long time to
            construct.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={Float} alt='Floating bridge' />
          <h3>Floating Bridge</h3>
          <p>
            A pontoon bridge or floating bridge is a bridge that floats on
            water, supported by barge or boat-like pontoons that support the
            bridge deck, or roadbed. They are used to bridge short spans of 200
            meters and can carry light loads. Floating bridges are usually
            temporary structures that can be constructed quickly .
          </p>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default BridgeSlides;
