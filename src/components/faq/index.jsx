import React from "react";
import { Accordion } from "react-bootstrap-accordion";

function FaqItem({ data }) {
  return (
    <section className="FAQ-section">
      <div className="tf-container st2">
        <div className="row">
          <div className="col-lg-12">
            <div className="accordion-page">
              <h4>Frequently Asked Questions</h4>
              <p className="des">
                Pellentesque quis lectus sagittis, gravida erat id
              </p>
              <h6>Payments</h6>
              <div className="flat-accordion">
                {data.slice(0, 4).map((item) => (
                  <Accordion
                    key={item.id}
                    title={item.title}
                    show={item.show}
                    className="flat-toggle"
                  >
                    <div className="toggle-content">
                      <p>{item.content}</p>
                    </div>
                  </Accordion>
                ))}
              </div>

              <h6>Suggestion</h6>
              <div className="flat-accordion">
                {data.slice(4, 8).map((item) => (
                  <Accordion
                    key={item.id}
                    title={item.title}
                    show={item.show}
                    className="flat-toggle"
                  >
                    <div className="toggle-content">
                      <p>{item.content}</p>
                    </div>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqItem;
