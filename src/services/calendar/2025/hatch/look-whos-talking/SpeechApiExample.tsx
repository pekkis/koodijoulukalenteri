"use client";

import Button from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Margins } from "@/components/ui/Margins";
import { Paragraph } from "@/components/ui/Paragraph";
import { Stack } from "@/components/ui/Stack";
import { FC, useEffect, useMemo, useState } from "react";

import { FaMicrophoneAlt } from "react-icons/fa";

import { FaMicrophoneAltSlash } from "react-icons/fa";

import { randomInteger } from "remeda";

import SpeechRecognition, {
  useSpeechRecognition
} from "react-speech-recognition";

export const SpeechApiExample: FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const [utteranceTxt, setUtteranceTxt] = useState<string>("");

  const synth = useMemo(() => {
    if (typeof window === "undefined") {
      return null;
    }

    const synth = window.speechSynthesis;

    return synth;
  }, []);

  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(
    synth?.getVoices().filter((voice) => {
      return voice.lang.startsWith("fi");
    }) || []
  );

  useEffect(() => {
    synth?.addEventListener("voiceschanged", (e) => {
      console.log("E", e);

      const finnishVoices = synth.getVoices().filter((voice) => {
        return voice.lang.startsWith("fi");
      });

      setVoices(finnishVoices);
    });
  }, [synth]);

  return (
    <section>
      <Heading level={2}>Puheentunnistus</Heading>

      <Stack row svelte>
        <div>
          <Button
            svelte
            onClick={() => {
              if (listening) {
                SpeechRecognition.stopListening();

                return;
              }

              SpeechRecognition.startListening({
                continuous: true,
                language: "fi"
              });
            }}
          >
            {listening ? <FaMicrophoneAltSlash /> : <FaMicrophoneAlt />} Aloita
            / lopeta sanelu
          </Button>
        </div>
        <div>
          <Button svelte onClick={() => resetTranscript()}>
            Resetoi
          </Button>
        </div>
      </Stack>

      <Paragraph>{transcript}</Paragraph>

      <Heading level={2}>Teksti puheeksi</Heading>

      <Margins block="s">
        <Stack>
          <textarea
            value={utteranceTxt}
            onChange={(e) => setUtteranceTxt(e.currentTarget.value)}
          />

          <div>
            <Button
              svelte
              onClick={() => {
                const utterance = new SpeechSynthesisUtterance(utteranceTxt);

                if (voices.length > 0) {
                  utterance.voice = voices[randomInteger(0, voices.length - 1)];
                }

                synth?.speak(utterance);
              }}
            >
              Puhu!
            </Button>
          </div>
        </Stack>
      </Margins>
    </section>
  );
};
