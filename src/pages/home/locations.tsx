import React, { useState, useEffect } from "react";
import { GetTownNames } from "../../utils/getTownNames";

import { CustomCard } from "../../components/customCard";
import { Content } from "../../components/cardContent";
import { Label } from "@rebass/forms";
import { Box } from "rebass";
import Select from "react-select";

interface IProps {}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const Locations: React.FC<IProps> = (): JSX.Element => {
  const [towns, setTowns] = useState<any>();

  const [selectedOption, setSelectedOption] = useState("Madrid");

  useEffect(() => {
    const getTownValues = async () => {
      const townNames = await GetTownNames();
      console.log("66666", townNames);

      setTowns(townNames);
    };

    getTownValues();
  }, []);

  const handleChange = (selectedOption: any) => {
    setSelectedOption({ ...selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <>
      {/* <CustomCard>
        {towns &&
          Object.keys(towns).map((town: any, index: number) => {
            return <Content content={towns[town]} key={index} />;
          })}
      </CustomCard> */}
      <Box>
        <CustomCard>
          {towns && (
            <Box>
              <Select
                options={Object.keys(towns).map((town) => {
                  return { value: town, label: towns[town] };
                })}
                onChange={handleChange}
              />
            </Box>
          )}
        </CustomCard>
      </Box>
    </>
  );
};
