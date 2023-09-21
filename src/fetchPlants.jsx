import { createClient } from "contentful";
import { useState, useEffect } from "react";

const client = createClient({
  space: "fw5qkqpo9oaa",
  environment: "master",
  accessToken: "sCMryd6GQAE0_WlpkZ-ZJM8GMTJgD2IliJ5Yf-Hv-kc",
});

// client
//   .getEntries({ content_type: "plantCareProject" })
//   .then((response) => console.log(response));
//custom hook

export const useFetchPlants = () => {
  const [loading, setLoading] = useState(true);
  const [plants, setPlants] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "plantCareProject",
      });
      const plants = response.items.map((item) => {
        const {
          environment,
          image,
          latinName,
          name,
          planting,
          type,
          watering,
        } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        const environmentRules = environment?.content[0]?.content[0]?.value;
        const plantingRules = planting?.content[0]?.content[0]?.value;
        const typeOfPlant = type?.content[0]?.content[0]?.value;
        const wateringRules = watering?.content[0]?.content[0]?.value;

        return {
          id,
          img,
          latinName,
          name,
          environmentRules,
          plantingRules,
          typeOfPlant,
          wateringRules,
        };
      });
      setPlants(plants);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      return <h5>There was an error</h5>;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, plants };
};
