import { createClient } from "contentful";

const client = createClient({
  space: "fw5qkqpo9oaa",
  environment: "master",
  accessToken: "sCMryd6GQAE0_WlpkZ-ZJM8GMTJgD2IliJ5Yf-Hv-kc",
});

client
  .getEntries({ content_type: "plantCareProject" })
  .then((response) => console.log(response));
