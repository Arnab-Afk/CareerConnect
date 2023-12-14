import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Term() {
  return (
    <section className="term-section">
      <div className="tf-container">
        <Tabs className="row tf-tab">
          <div className="col-lg-4">
            <TabList className="menu-tab tab-term po-sticky">
              <Tab className="ct-tab">1. Terms </Tab>
              <Tab className="ct-tab">2. Limitations </Tab>
              <Tab className="ct-tab">3. Revisions and errata</Tab>
              <Tab className="ct-tab">4. Site terms of use modifications</Tab>
              <Tab className="ct-tab">5. Risks</Tab>
            </TabList>
          </div>
          <div className="col-lg-8">
            <div className="content-tab">
              <TabPanel className="term-content animation-tab">
                <h4>Terms of use</h4>
                <h6>1. Terms </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed euismod justo, sit amet efficitur dui. Aliquam
                  sodales vestibulum velit, eget sollicitudin quam. Donec non
                  aliquam eros. Etiam sit amet lectus vel justo dignissim
                  condimentum.
                </p>
                <p>
                  In malesuada neque quis libero laoreet posuere. In consequat
                  vitae ligula quis rutrum. Morbi dolor orci, maximus a pulvinar
                  sed, bibendum ac lacus. Suspendisse in consectetur lorem.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam elementum, est sed
                  interdum cursus, felis ex pharetra nisi, ut elementum tortor
                  urna eu nulla. Donec rhoncus in purus quis blandit.
                </p>
                <p className="mgb-32">
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie
                </p>
                <h6>2. Limitations</h6>
                <p>
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie a, finibus nec ex.
                </p>
                <ul className="list-dot">
                  <li>
                    {" "}
                    Aliquam elementum, est sed interdum cursus, felis ex
                    pharetra nisi, ut elementum tortor urna eu nulla. Donec
                    rhoncus in purus quis blandit.
                  </li>
                  <li> Etiam eleifend metus at nunc ultricies facilisis.</li>
                  <li>
                    {" "}
                    Nullam vel eleifend est, eu posuere risus. Vestibulum ligula
                    ex, ullamcorper sit amet molestie a, finibus nec ex.
                  </li>
                </ul>
                <p className="mgb-32">
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie
                </p>
                <h6>3. Revisions and errata</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed euismod justo, sit amet efficitur dui. Aliquam
                  sodales vestibulum velit, eget sollicitudin quam. Donec non
                  aliquam eros. Etiam sit amet lectus vel justo dignissim
                  condimentum.
                </p>
                <p>
                  In malesuada neque quis libero laoreet posuere. In consequat
                  vitae ligula quis rutrum. Morbi dolor orci, maximus a pulvinar
                  sed, bibendum ac lacus. Suspendisse in consectetur lorem.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam elementum, est sed
                  interdum cursus, felis ex pharetra nisi, ut elementum tortor
                  urna eu nulla. Donec rhoncus in purus quis
                </p>
                <p className="mgb-32">
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie a, finibus nec ex.
                </p>
                <h6>4. Site terms of use modifications</h6>
                <p>
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie a, finibus nec ex.
                </p>
                <ul className="list-dot">
                  <li>
                    {" "}
                    Aliquam elementum, est sed interdum cursus, felis ex
                    pharetra nisi, ut elementum tortor urna eu nulla. Donec
                    rhoncus in purus quis blandit.
                  </li>
                  <li> Etiam eleifend metus at nunc ultricies facilisis.</li>
                  <li>
                    {" "}
                    Nullam vel eleifend est, eu posuere risus. Vestibulum ligula
                    ex, ullamcorper sit amet molestie a, finibus nec ex.
                  </li>
                </ul>
                <p className="mgb-32">
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie
                </p>
                <h6>5. Risks</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed euismod justo, sit amet efficitur dui. Aliquam
                  sodales vestibulum velit, eget sollicitudin quam. Donec non
                  aliquam eros. Etiam sit amet lectus vel justo dignissim
                  condimentum.
                </p>
                <p>
                  In malesuada neque quis libero laoreet posuere. In consequat
                  vitae ligula quis rutrum. Morbi dolor orci, maximus a pulvinar
                  sed, bibendum ac lacus. Suspendisse in consectetur lorem.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam elementum, est sed
                  interdum cursus, felis ex pharetra nisi, ut elementum tortor
                  urna eu nulla. Donec rhoncus in purus quis blandit.
                </p>
                <p>
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie{" "}
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>2. Limitations</h6>
                <p>
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie a, finibus nec ex.
                </p>
                <ul className="list-dot">
                  <li>
                    {" "}
                    Aliquam elementum, est sed interdum cursus, felis ex
                    pharetra nisi, ut elementum tortor urna eu nulla. Donec
                    rhoncus in purus quis blandit.
                  </li>
                  <li> Etiam eleifend metus at nunc ultricies facilisis.</li>
                  <li>
                    {" "}
                    Nullam vel eleifend est, eu posuere risus. Vestibulum ligula
                    ex, ullamcorper sit amet molestie a, finibus nec ex.
                  </li>
                </ul>
                <p>
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>3. Revisions and errata</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed euismod justo, sit amet efficitur dui. Aliquam
                  sodales vestibulum velit, eget sollicitudin quam. Donec non
                  aliquam eros. Etiam sit amet lectus vel justo dignissim
                  condimentum.
                </p>
                <p>
                  In malesuada neque quis libero laoreet posuere. In consequat
                  vitae ligula quis rutrum. Morbi dolor orci, maximus a pulvinar
                  sed, bibendum ac lacus. Suspendisse in consectetur lorem.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam elementum, est sed
                  interdum cursus, felis ex pharetra nisi, ut elementum tortor
                  urna eu nulla. Donec rhoncus in purus quis
                </p>
                <p>
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie a, finibus nec ex.
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>4. Site terms of use modifications</h6>
                <p>
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie a, finibus nec ex.
                </p>
                <ul className="list-dot">
                  <li>
                    {" "}
                    Aliquam elementum, est sed interdum cursus, felis ex
                    pharetra nisi, ut elementum tortor urna eu nulla. Donec
                    rhoncus in purus quis blandit.
                  </li>
                  <li> Etiam eleifend metus at nunc ultricies facilisis.</li>
                  <li>
                    {" "}
                    Nullam vel eleifend est, eu posuere risus. Vestibulum ligula
                    ex, ullamcorper sit amet molestie a, finibus nec ex.
                  </li>
                </ul>
                <p>
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie
                </p>
              </TabPanel>
              <TabPanel className="term-content animation-tab">
                <h6>5. Risks</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sed euismod justo, sit amet efficitur dui. Aliquam
                  sodales vestibulum velit, eget sollicitudin quam. Donec non
                  aliquam eros. Etiam sit amet lectus vel justo dignissim
                  condimentum.
                </p>
                <p>
                  In malesuada neque quis libero laoreet posuere. In consequat
                  vitae ligula quis rutrum. Morbi dolor orci, maximus a pulvinar
                  sed, bibendum ac lacus. Suspendisse in consectetur lorem.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Aliquam elementum, est sed
                  interdum cursus, felis ex pharetra nisi, ut elementum tortor
                  urna eu nulla. Donec rhoncus in purus quis blandit.
                </p>
                <p>
                  Etiam eleifend metus at nunc ultricies facilisis. Morbi
                  finibus tristique interdum. Nullam vel eleifend est, eu
                  posuere risus. Vestibulum ligula ex, ullamcorper sit amet
                  molestie{" "}
                </p>
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default Term;
