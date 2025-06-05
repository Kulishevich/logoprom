import { BelarusFlagIcon } from "@/shared/assets/icons";
import { Country } from "./CountrySelect";

export const countries: Country[] = [
  {
    code: "BY",
    name: "Беларусь",
    dialCode: "+375",
    flag: "🇧🇾",
    icon: <BelarusFlagIcon />,
  },
  {
    code: "RU",
    name: "Россия",
    dialCode: "+7",
    flag: "🇷🇺",
    icon: <BelarusFlagIcon />,
  },
];
