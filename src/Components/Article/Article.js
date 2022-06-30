import React from "react";
import Container from "@material-ui/core/Container";

import "./styles.css";

function Article() {
  return (
    <Container maxWidth="md">
      <article>
        <p>
          <b>This is a map of sexual abuse committed by Roman Catholic priests and brothers who belonged to the Society of Jesus.</b>
        </p>
        <p>
          In the United States, Jesuits are best-known for teaching in high schools and colleges. They also directed missions to Indigenous communities during the nineteenth and twentieth centuries.
        </p>
        <p>
          Between 2001 and 2009 the Oregon Province of the Society of Jesus paid tens of millions of dollars to <a href="https://www.bishop-accountability.org/news2009/01_02/2009_02_20_Roberts_OregonProvince.htm" target="_blank">settle claims</a> by 200 mainly Indigenous survivors of sexual abuse. In 2009 the province filed for bankruptcy, and two years later in a <a href="https://www.seattletimes.com/seattle-news/nw-jesuits-to-pay-166-million-to-abuse-victims/" target="_blank">bankruptcy settlement</a> to pay $166 million to about 500 additional survivors. In 2017 the Oregon Province united with the California Province under the name “Jesuits West.” The next year, this Western Province published a list of Jesuits with “credible claims of sexual abuse of a minor or vulnerable adult, dating to 1950.”
        </p>
        <p>
          As of 2022, the Jesuits West list includes ninety-nine priests and thirteen brothers. These men worked in territory the Oregon and California provinces covered: Arizona, Alaska, California, Hawaii, Idaho, Montana, Nevada, Oregon, Utah and Washington. The Western Province describes this list as part of its “ongoing commitment to transparency and accountability.” Its publication was also required by the bankruptcy settlement.
        </p>
        <p>
          <i>Desolate Country</i> is a map built from information on the Jesuits West list. This includes names of priests and brothers, places they lived and worked, and years during which they abused.
        </p>
        <p>
          The Western Province list is one of nearly  <a href="https://www.bishop-accountability.org/AtAGlance/diocesan_and_order_lists.htm" target="_blank">two hundred</a> “sexual abuse disclosure” lists published by US Catholic dioceses and religious orders. The Jesuit list is more comprehensive than most like it, but it also contains errors and omissions. For example, sixteen men are named without their dates of abuse. Because Desolate Country relies on the Jesuit list, these men appear on the map, but abuse they committed does not. Because it relies on the list, the map is also limited by (non-public) criteria the Jesuits use to assess “credibility” of accusations.
        </p>
        <p>
          In short, <i>Desolate Country</i> visualizes data produced by a Catholic institution guided by its own interests. With this in mind, we present <i>Desolate Country</i> as both a tool for tracking abuse, and an artifact of problems inherent in all institutional Catholic archives related to abuse.
        </p>
        <p>
          We invite you to use this map however you find useful. Here are two ways to begin: First, search by individual. Searching by individual lets you see all locations (institutions, cities, states) where a priest or brother spent time, and locations where he abused. Once you select an individual, press the “Watch this Jesuit Move” button to see him travel across his career: before, during, and after known acts of abuse. Then click on his name to learn about abuse he committed via the cataloging efforts of our friends at <a href="https://www.bishop-accountability.org/" target="_blank">BishopAccountability</a>).
        </p>
        <p>
          Second, search by institution, either by selecting a location from the menu, or by clicking a bubble on the map. Black bubbles indicate sites where predators lived or worked, but where no known accusations were made. Red bubbles indicate known sites of abuse. The numbers displayed within red bubbles correspond with the number of Jesuits known to have abused while at that institution. Those numbers are not equivalent to the number of incidents or victims, which are often far higher.
        </p>
        <p>
          Clusters on the map signify different stories. The bubble displaying “12” at St. Mary’s Mission on the Colville Reservation in central Washington, for example, marks a boarding school where priests <a href="https://www.bishop-accountability.org/news2011/11_12/2011_11_23_Mehaffey_FormerOmak.htm" target="_blank">abused Native children</a> while acting as foster parents. The constellation of bubbles across southwestern Alaska maps the trail of missionary abuse documented <a href="https://www.pbs.org/wgbh/pages/frontline/the-silence/#:~:text=In%20The%20Silence%2C%20FRONTLINE%20producer,late%201960s%20and%20early%201970s." target="_blank">here</a>. Other bubbles– at Gonzaga University in Spokane, Washington, for example, and the Sacred Heart Jesuit Center in Los Gatos, California– indicate institutions where Jesuits (including abusers) <a href="https://www.seattletimes.com/seattle-news/jesuits-sent-abusive-priests-to-retire-on-gonzaga-university-campus/" target="_blank">were sent</a> “to retire.”
        </p>
        <p>
          As you explore institutions, we invite you to ask questions: At what types of institutions, in what parts of the US and on which Native lands, did abusing priests proliferate? What do these clusters suggest about the causes and the character—as well as the consequences-- of clerical sexual abuse?
        </p>
        <p>We are grateful to the Religion and Sexual Abuse Project for support that made this map possible.</p>
      </article>
    </Container>
  );
}

export default Article;
