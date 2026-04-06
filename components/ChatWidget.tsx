"use client";

import Script from "next/script";

export default function ChatWidget() {
  return (
    <Script
      src="https://cdn.jotfor.ms/agent/embedjs/019d61e9512a79f3ad50011a2fdd4398c4f6/embed.js"
      strategy="lazyOnload"
    />
  );
}
