import { useState } from "react";

import bugImageUrl from "../../assets/bug.png";
import ideaImageUrl from "../../assets/idea.png";
import thoughtImageUrl from "../../assets/thought.png";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title: 'Idéia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de um lâmpada'
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handlesRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        {!feedbackType ? (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
        ) : (
          <FeedbackContentStep 
            feedbackType={feedbackType} 
            onFeedbackRestartRequested={handlesRestartFeedback}
          />
        )}
      <footer>
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br" >Rocketseat</a>
      </footer>
    </div>
  )
}