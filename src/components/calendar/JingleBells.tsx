"use client";

import { FC, useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Button from "@/components/ui/Button";
import useNaughtiness from "@/hooks/useNaughtiness";
import { ClientCalendarType } from "@/services/calendar";
import * as styles from "./JingleBells.css";

type Props = {
  calendar: ClientCalendarType;
  isInteractive?: boolean;
};

const JingleBells: FC<Props> = ({ calendar, isInteractive }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const { naughtinessLevel } = useNaughtiness(calendar);

  const ref = useRef<HTMLAudioElement>(null);

  const Icon = isPlaying ? FaPause : FaPlay;
  const title = !isPlaying
    ? "Kilistele kulkusia"
    : "Lopeta kulkusten kilistely";

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    ref.current.load();
    if (isPlaying) {
      ref?.current.play();
    }
  }, [naughtinessLevel.music, isPlaying]);

  return (
    <div className={styles.jingleBells}>
      <Button
        disabled={!isInteractive}
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
        src={naughtinessLevel.music}
        onPause={() => {
          setIsPlaying(false);
        }}
        onPlay={() => {
          setIsPlaying(true);
        }}
      />
    </div>
  );
};

export default JingleBells;
