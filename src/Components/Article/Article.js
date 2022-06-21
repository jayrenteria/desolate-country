import React from "react";
import Container from "@material-ui/core/Container";

import "./styles.css";

function Article() {
  return (
    <Container maxWidth="md">
      <article>
        <p>
          This is a map of sexual abuse committed by Roman Catholic priests and brothers who were and are members of the Society of Jesus. In the United States, Jesuits (as members of the Society are called) are best-known for teaching in high schools and colleges. They also, however, directed dozens of missions to Indigenous communities during the late-nineteenth and twentieth centuries.
        </p>
        <p>
        Between 2001 and 2009 the Oregon Province of the Society of Jesus paid tens of millions of dollars to <a href="https://www.bishop-accountability.org/news2009/01_02/2009_02_20_Roberts_OregonProvince.htm" target="_blank">settle claims</a> by more than 200 mainly Indigenous survivors of sexual abuse. In 2009 the province filed for Chapter 11 bankruptcy, and two years later it reached <a href="https://www.seattletimes.com/seattle-news/nw-jesuits-to-pay-166-million-to-abuse-victims/" target="_blank">a settlement</a> to pay $166 million to an additional 500 survivors. In 2017 the Oregon Province united with the California Province under the new title “Jesuits West.” The following year, this Western Province published a list of Jesuits with “credible claims of sexual abuse of a minor or vulnerable adult, dating to 1950.”
        </p>
        <p>
        As of 2022, the Jesuit West list includes 112 priests and brothers, all of whom chiefly worked in territory the Oregon and California provinces covered: Arizona, Alaska, California, Hawaii, Idaho, Montana, Nevada, Oregon, Utah and Washington. The Western Province describes this list as part of its “ongoing commitment to transparency and accountability.” Its publication was also required by the Oregon province’s bankruptcy settlement.
        </p>
        <p>
          <i>Desolate Country</i> is a map built from information provided on the Jesuits West list. This includes names of priests and brothers, places they lived and worked, and years during which they abused. 
        </p>
        <p>
        The Western Province list is among the most transparent of nearly <a href="https://www.bishop-accountability.org/AtAGlance/diocesan_and_order_lists.htm" target="_blank">two hundred</a> “sexual abuse disclosure” lists published by US Catholic dioceses and religious orders. That said, it is neither complete nor error-free. For example, sixteen of 112 Jesuits are listed without corresponding dates for accusations made against them. Because we decided early in this project to translate the Western Province list as-is (rather than try to fill in gaps in the record using other sources), the abuse these men committed is missing from the map. Similarly, in relying on the Western Province list we are limited by the (non-public) criteria the Jesuits use to assess “credibility” of accusations.
        </p>
        <p>
        In short, <i>Desolate Country</i> visualizes a dataset produced by a Catholic institution guided by its own interests. With this in mind, we present <i>Desolate Country</i> not only as a tool for tracking abuse – though we think the available information makes it useful in that way – but also as an artifact of the problems inherent in Jesuit disclosures and in all institutional Catholic archives related to abuse.
        </p>
        <p>
        We invite you to use this map however you find useful. Here are two possible ways to begin: First, search by individual. Searching by individual will let you see all the locations (institutions, cities, states) where a priest or brother spent time, as well as, in most cases, locations where he abused. Once you select an individual, press the “Watch this Jesuit Move” button to see how he traveled between locations across his career: before, during and after his known acts of abuse. Once you select an individual, you can also click on his name to learn more about him, and the abuse he committed (via the cataloging efforts of our friends at <a href="https://www.bishop-accountability.org/" target="_blank">BishopAccountability</a>). 
        </p>
        <p>
        A second option is to search by institution, either by selecting a location from the dropdown menu, or by clicking on a bubble on the map. Black bubbles indicate sites where predators lived or worked, but where no known accusations were made. Red bubbles indicate sites of abuse. The numbers (1,2,3,4) visible within red bubbles correspond with the number of Jesuits known to have abused while at that institution, not the overall number of incidents or victims (which is often far higher).
        </p>
        <p>
        Different clusters on the map suggest different stories. The red bubble at St. Mary’s Mission on the Colville Reservation in central Washington, for example, marks a boarding school where priests <a href="https://www.bishop-accountability.org/news2011/11_12/2011_11_23_Mehaffey_FormerOmak.htm" target="_blank">abused Native children</a> while also acting as foster parents. The constellation of bubbles across southwestern Alaska maps the trail of missionary abuse documented <a href="https://www.pbs.org/wgbh/pages/frontline/the-silence/#:~:text=In%20The%20Silence%2C%20FRONTLINE%20producer,late%201960s%20and%20early%201970s." target="_blank">here</a>. Other bubbles– around Gonzaga University in Spokane, Washington, for example, and the Sacred Heart Jesuit Center in Los Gatos, California– indicate institutions where Jesuits (including many known abusers) <a href="https://www.seattletimes.com/seattle-news/jesuits-sent-abusive-priests-to-retire-on-gonzaga-university-campus/" target="_blank">were sent</a> “to retire.”
        </p>
        <p>
        As you search by institution, we invite you to ask new questions about abuse: At what types of institutions, in what parts of the United States and on which Native lands, did abusing priests proliferate? Why do we find  clusters not only in big cities like Portland and San Francisco, but also in rural places like southwestern Alaska? What can these clusters teach us about the causes, the character, and the consequences of clerical sexual abuse?
        </p>
        <p>We are grateful to the Religion and Sexual Abuse Project for its financial support to make this map possible.</p>
      </article>
    </Container>
  );
}

export default Article;
