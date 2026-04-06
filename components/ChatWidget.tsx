"use client";

import Script from "next/script";

export default function ChatWidget() {
  return (
    <>
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[999] w-[calc(100%-2rem)] max-w-[380px] h-fit pointer-events-auto rounded-2xl overflow-hidden shadow-2xl origin-bottom-right transition-all duration-300">
        <iframe
          id="JotFormIFrame-019d61e9512a79f3ad50011a2fdd4398c4f6"
          title="Casey: Feedback Analyst"
          allow="geolocation; microphone; camera; fullscreen"
          src="https://agent.jotform.com/019d61e9512a79f3ad50011a2fdd4398c4f6?embedMode=iframe&autofocus=0&background=1&shadow=1"
          frameBorder="0"
          style={{
            maxWidth: "100%",
            height: "688px",
            maxHeight: "80vh",
            border: "none",
            width: "100%",
          }}
          scrolling="no"
        />
      </div>
      <Script
        src="https://cdn.jotfor.ms/agent/embedjs/019d61e9512a79f3ad50011a2fdd4398c4f6/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && (window as any).jotformEmbedHandler) {
            (window as any).jotformEmbedHandler(
              "iframe[id='JotFormIFrame-019d61e9512a79f3ad50011a2fdd4398c4f6']",
              "https://www.jotform.com"
            );
          }
        }}
      />
    </>
  );
}
