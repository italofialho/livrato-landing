"use client";

import { useEffect, useState } from "react";

import * as S from "./styles";

const IMAGES_FOLDER = "/assets/simulator/banners";

const ANIMATION_ACTIVE_DELAY = 1_000;

const getImage = (side: "right" | "left", row: number, item: number): string =>
  `${IMAGES_FOLDER}/row_${side}_${row}_item_${item}.png`;

const getRowImages = (
  side: "right" | "left",
  row: number,
  length: number
): string[] =>
  Array.from({ length }, (_, item) => getImage(side, row, item + 1));

const getAllImages = (): Array<Record<"right" | "left", string[]>> => {
  const rows = [
    { row: 1, length: 2 },
    { row: 2, length: 2 },
    { row: 3, length: 3 },
    { row: 4, length: 3 },
    { row: 5, length: 4 },
  ];

  return rows.map(({ row, length }) => ({
    right: getRowImages("right", row, length),
    left: getRowImages("left", row, length),
  }));
};

const images = getAllImages();

const getRandomImage = (images: string[]): string =>
  images[Math.floor(Math.random() * images.length)];

const getRandomImages = () => {
  const rightImages = images.flatMap((row) => row.right);
  const leftImages = images.flatMap((row) => row.left);

  const randomRightImage = getRandomImage(rightImages);
  const randomLeftImage = getRandomImage(leftImages);

  console.log(`Random Right Image: ${randomRightImage}`);
  console.log(`Random Left Image: ${randomLeftImage}`);

  return { rightImage: randomRightImage, leftImage: randomRightImage };
};

export function ImagesPuzzle() {
  const [rightImageActive, setRightImageActive] = useState<string>();
  const [leftImageActive, setLeftImageActive] = useState<string>();

  const setRandomImages = () => {
    const { rightImage, leftImage } = getRandomImages();
    setRightImageActive(rightImage);
    setLeftImageActive(leftImage);
  };

  useEffect(() => {
    setRandomImages();

    const intervalId = setTimeout(() => {
      setRandomImages();
    }, ANIMATION_ACTIVE_DELAY);

    return () => clearTimeout(intervalId);
  }, []);

  console.dir(images);

  return (
    <>
      {images.map((row, index) => (
        <S.PuzzleRow key={`row_${index}`}>
          <S.PuzzleLeft>
            {row.left.map((image) => (
              <S.PuzzleImage
                key={image}
                image={image}
                active={image === leftImageActive}
              />
            ))}
          </S.PuzzleLeft>

          <S.PuzzleRight>
            {row.right.map((image) => (
              <S.PuzzleImage
                key={image}
                image={image}
                active={image === rightImageActive}
              />
            ))}
          </S.PuzzleRight>
        </S.PuzzleRow>
      ))}
    </>
  );
}
