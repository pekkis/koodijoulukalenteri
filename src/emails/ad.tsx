import {
  Html,
  Tailwind,
  Img,
  Row,
  Column,
  Text,
  Button
} from "@react-email/components";
import { FC } from "react";

import image1 from "@/services/calendar/2025/hatch/corner-case/corner-case.webp";
import image2 from "@/services/calendar/2025/hatch/movies/beekeeper-2.webp";
import image3 from "@/services/calendar/2025/hatch/email/email.webp";

const Ad: FC = () => {
  return (
    <Html lang="fi" dir="ltr">
      <Tailwind>
        <Row>
          <Column>
            <Text className="text-3xl">
              Oletko jo kuullut koodijoulukalenterista? Tuntematon ystävä tilasi
              sinulle tämän mainosviestin!
            </Text>

            <Button
              className="box-border rounded-[8px] bg-red-600 px-[12px] py-[12px] text-center font-semibold text-white"
              href="https://koodijoulukalenteri.pekkis.eu"
            >
              Käy katsomassa heti!
            </Button>
          </Column>
        </Row>

        <Row className="mt-12 mb-0">
          <Column align="center" className="w-1/3 p-8">
            <Img
              alt="Koodijoulukalenteri, luukku 1"
              className="rounded-[12px] my-0 mx-auto aspect-square w-full"
              src={`https://koodijoulukalenteri.pekkis.eu${image1.src}`}
            />
          </Column>
          <Column align="center" className="w-1/3 p-8">
            <Img
              alt="Koodijoulukalenteri, luukku 2"
              className="rounded-[12px] my-0 mx-auto aspect-square w-full"
              src={`https://koodijoulukalenteri.pekkis.eu${image2.src}`}
            />
          </Column>
          <Column align="center" className="w-1/3 p-8">
            <Img
              alt="Koodijoulukalenteri, luukku 3"
              className="rounded-[12px] my-0 mx-auto aspect-square w-full"
              src={`https://koodijoulukalenteri.pekkis.eu${image3.src}`}
            />
          </Column>
        </Row>
      </Tailwind>
    </Html>
  );
};

export default Ad;
