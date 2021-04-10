import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import Container from "@material-ui/core/Container";

import "./styles.css";

function Article() {
  return (
    <Container maxWidth="md">
      <article>
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
          metus nec neque volutpat maximus vel ut nisi. Vivamus mollis elit quis
          quam placerat faucibus. Suspendisse vel mauris dignissim, lobortis
          urna vitae, rutrum ligula. Phasellus non justo gravida, ornare est at,
          porta ex. Nulla arcu tortor, suscipit ac porttitor eget, laoreet vitae
          ipsum. Sed posuere sed tellus in porttitor. Integer mollis, metus
          lacinia pretium ultricies, magna eros tincidunt tellus, vel pretium
          dui felis at nulla. Vestibulum congue, ante eget lacinia dictum, erat
          turpis tempor libero, a aliquet nisl neque non lorem. Maecenas quis
          dapibus nibh. Sed ornare lectus urna, sit amet condimentum elit porta
          nec. Duis a sollicitudin mauris. Duis porttitor in erat sed ornare.
          Duis mollis turpis diam, vel porta magna posuere vitae
        </p>
        <p>
          Vivamus quis nulla euismod, luctus magna nec, facilisis elit. Aenean
          suscipit nisi in auctor dictum. Etiam at tempus nisl. Pellentesque sed
          tempor ipsum, quis maximus erat. Nulla vel vestibulum felis. Etiam
          tempor congue elit, et blandit diam facilisis vitae. In hac habitasse
          platea dictumst. Donec sit amet arcu erat. Curabitur tincidunt lectus
          ante, a tincidunt tortor porttitor ac. Curabitur eget nunc efficitur,
          finibus nisl sed, sodales nisl. Sed condimentum risus non velit
          aliquet suscipit. Morbi purus dui, imperdiet id sem eu, viverra
          malesuada orci
        </p>
        <ImageCard
          title="Figure 1"
          body="Body 2"
          imageSrc="/example-fig1.png"
          imageTitle="Grey Picture"
          imageDescription="Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor"
        />
        <p>
          Aliquam erat volutpat. Curabitur bibendum a sapien ac semper.
          Suspendisse sodales nunc ut posuere pellentesque. Pellentesque metus
          felis, bibendum at augue eu, cursus feugiat elit. Donec ullamcorper
          est ut augue interdum interdum. Donec laoreet non dui at pharetra.
          Mauris auctor quis dolor eu dignissim. Ut lacinia imperdiet mauris
          quis placerat. Suspendisse potenti
        </p>
        <p>
          Etiam sapien turpis, molestie id velit et, commodo scelerisque metus.
          Fusce sodales metus tristique tortor venenatis, in interdum lacus
          tristique. Aliquam mollis lacus vitae mauris fermentum bibendum. Nunc
          pellentesque lacus mi, et pharetra quam gravida et. Suspendisse
          eleifend, lacus ac vulputate venenatis, nisl eros convallis magna,
          quis efficitur justo erat non augue. Duis sagittis erat turpis, eti
        </p>
      </article>
    </Container>
  );
}

export default Article;
