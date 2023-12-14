import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function Pricing2() {
  return (
    <section className="pricing-section-two">
      <div className="tf-container st3">
        <Tabs className="row align-item-center tf-tab">
          <div className="col-lg-3">
            <div className="group-pricing-v1 st2">
              <TabList className="menu-tab">
                <Tab className="ct-tab">Monthly</Tab>
                <Tab className="ct-tab">annual</Tab>
              </TabList>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="group-pricing-v1 st2 ct2 tf-tab">
              <div className="content-tab">
                <TabPanel className="inner animation-tab">
                  <div className="group-col-3">
                    <div className="pricing-box cl3">
                      <div className="group-tag">
                        <div className="tag1">Basic</div>
                      </div>
                      <div className="pricing">
                        $19.00<span>/month</span>
                      </div>
                      <a href="#" className="btn">
                        Browse themes
                      </a>
                    </div>
                    <div className="pricing-box active cl3">
                      <div className="group-tag">
                        <div className="tag1">Standard</div>
                      </div>
                      <div className="pricing">
                        $39.00<span>/month</span>
                      </div>
                      <a href="#" className="btn">
                        Browse themes
                      </a>
                    </div>
                    <div className="pricing-box cl3">
                      <div className="group-tag">
                        <div className="tag1">Extended</div>
                      </div>
                      <div className="pricing">
                        $79.00<span>/month</span>
                      </div>
                      <a href="#" className="btn">
                        Browse themes
                      </a>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel className="inner animation-tab">
                  <div className="group-col-3">
                    <div className="pricing-box cl3">
                      <div className="group-tag">
                        <div className="tag1">Basic</div>
                      </div>
                      <div className="pricing">
                        $19.00<span>/month</span>
                      </div>
                      <a href="#" className="btn">
                        Browse themes
                      </a>
                    </div>
                    <div className="pricing-box active cl3">
                      <div className="group-tag">
                        <div className="tag1">Standard</div>
                      </div>
                      <div className="pricing">
                        $39.00<span>/month</span>
                      </div>
                      <a href="#" className="btn">
                        Browse themes
                      </a>
                    </div>
                    <div className="pricing-box cl3">
                      <div className="group-tag">
                        <div className="tag1">Extended</div>
                      </div>
                      <div className="pricing">
                        $79.00<span>/month</span>
                      </div>
                      <a href="#" className="btn">
                        Browse themes
                      </a>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Pricing2;
