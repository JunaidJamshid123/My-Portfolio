import { useState, useEffect } from "react";

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const TypeWriter = ({
  texts,
  speed = 60,
  deleteSpeed = 30,
  delayBetween = 2500,
  className = "",
}: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), delayBetween);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, delayBetween]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink text-primary ml-0.5 font-light">|</span>
    </span>
  );
};

export default TypeWriter;
