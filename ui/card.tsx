import React, { useState } from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import face from "@/public/face5.jpg";
import { HeartIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";
const Cards = () => {
  const [liked, setLiked] = useState(false);
  return (
      <Card
        isBlurred
        className="border-none max-w-[610px]"
        shadow="sm"
      >
        <CardBody>
          
            <div className="relative w-[500px]">
              <Image
                alt="Album cover"
                className="object-cover"
                isZoomed
                height={"100%"}
                width={150}
                shadow="md"
                src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
              />
            </div>
        </CardBody>
      </Card>
  );
};

export default Cards;
