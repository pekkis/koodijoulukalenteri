/* eslint-disable jsx-a11y/media-has-caption */

"use client";

import { FC, useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Button from "@/components/ui/Button";
import useNaughtiness from "@/hooks/useNaughtiness";

const getTrack = (naughtinessLevel: number): string => {
  if (naughtinessLevel < 3) {
    return "/jingle-bells.mp3";
  }

  if (naughtinessLevel < 5) {
    return "/horror-bells.mp3";
  }

  // to horst wessel or not?
  return "/horst-wessel-lied.mp3";
};

const JingleBells: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const { naughtinessLevel } = useNaughtiness();

  const ref = useRef<HTMLAudioElement>(null);

  const Icon = isPlaying ? FaPause : FaPlay;
  const title = !isPlaying
    ? "Kilistele kulkusia"
    : "Lopeta kulkusten kilistely";

  const track = getTrack(naughtinessLevel.level);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.load();
    if (isPlaying) {
      ref?.current.play();
    }
  }, [track, isPlaying]);

  return (
    <>
      <Button
        icon={<Icon />}
        onClick={() => {
          if (isPlaying) {
            return ref.current?.pause();
          }
          return ref.current?.play();
        }}
      >
        {title}
      </Button>
      <audio
        loop={true}
        ref={ref}
        src={track}
        onPause={() => {
          setIsPlaying(false);
        }}
        onPlay={() => {
          setIsPlaying(true);
        }}
      />
    </>
  );
};

export default JingleBells;
