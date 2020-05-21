import React, { useState, useEffect } from "react";
import { GetTownNames } from "../../utils/getTownNames";

import { CustomCard } from "../../components/customCard";
import { Content } from "../../components/cardContent";
import { Box, Flex } from "rebass";
import Select from "react-select";

interface IProps {
  onClick: (location: string) => void;
}

export const Locations: React.FC<IProps> = ({ onClick }): JSX.Element => {
  const [towns, setTowns] = useState<any>();

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const getTownValues = async () => {
      const townNames = await GetTownNames();
      console.log("111111", townNames);

      setTowns(townNames);
    };

    getTownValues();
  }, []);

  const handleChange = (selectedOption: any) => {
    setSelectedOption({ ...selectedOption });
    console.log(`Option selected:`, selectedOption);
    onClick(selectedOption.value);
  };

  return (
    <>
      <Flex
        justifyContent="center"
        width={["90%", "90%", "90%", "80%", "80%", "80%", "80%", "80%"]}
      >
        <CustomCard width="100%">
          {towns && (
            <>
              <Content title={"Localidades en las que damos servicio"} />
              <Box width="100%">
                <Select
                  placeholder="Madrid"
                  value={selectedOption}
                  options={Object.keys(towns)
                    .sort()
                    .map((town) => {
                      return { value: town, label: towns[town] };
                    })}
                  onChange={handleChange}
                  isSearchable={false}
                />
              </Box>
            </>
          )}
        </CustomCard>
      </Flex>
    </>
  );
};
