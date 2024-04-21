"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import data from "@/Data.json";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { Bookmark } from "lucide-react";

export default function Featured() {
  const featuredPlatform = data.filter((platform) =>
    platform.category.includes("featured")
  );

  return (
    <div className="max-w-4xl p-6 mx-auto">
      <div className="flex justify-center">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-4 gap-x-[7rem]"
        >
          {featuredPlatform.map((platform, index) => (
            <Card key={index} className="w-[300px]">
              <CardHeader>
                <div className="flex space-x-2">
                  <Image
                    src={platform.image}
                    alt={platform.name}
                    width={50}
                    height={50}
                  />
                  <CardTitle>{platform.name}</CardTitle>
                </div>

                <div className="flex justify-between">
                  <h3>{platform.pricing}</h3>
                  <div>
                    <Bookmark />
                  </div>
                </div>
                <CardDescription>{platform.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p className="text-blue-500">{platform.hastag}</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {/** <Button variant="outline">More...</Button> */}
                <Button className="space-x-1">
                  <Link href={platform.link} target="_blank">
                    {platform.name}
                  </Link>
                  <MoveUpRight size="16" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
