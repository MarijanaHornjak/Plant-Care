import { RiMentalHealthLine } from "react-icons/ri";
import { PiBrainLight, PiPlant } from "react-icons/pi";
import { LuRefreshCw } from "react-icons/lu";
import { GiPencilBrush, GiNightSleep } from "react-icons/gi";

export const facts = [
  {
    id: 1,
    title: "Stress Reduction",
    text: 'Studies have shown that spending time in nature and in environments with lots of plants can reduce stress levels. This is known as "forest therapy" or "shinrin-yoku" in Japanese culture.',
    icon: <RiMentalHealthLine />,
  },
  {
    id: 2,
    title: "Improved Concentration",
    text: "Plants in a space can help increase focus and productivity. This is especially important in work or educational settings.",
    icon: <PiBrainLight />,
  },
  {
    id: 3,
    title: "Air Purification",
    text: " Some plants, such as ivy and dracaenas, can help purify the air by removing harmful toxins and improving indoor air quality",
    icon: <LuRefreshCw />,
  },
  {
    id: 4,
    title: "Connection to Nature",
    text: "Tending to plants reminds people of the natural world and can connect them with natural cycles and rhythms.",
    icon: <PiPlant />,
  },
  {
    id: 5,
    title: "Enhanced Creativity",
    text: "Plants and natural surroundings can stimulate creativity and imaginative thinking.",
    icon: <GiPencilBrush />,
  },
  {
    id: 6,
    title: "Better Sleep",
    text: "Plants in the bedroom can help improve sleep quality as they produce oxygen and enhance overall air quality.",
    icon: <GiNightSleep />,
  },
];
