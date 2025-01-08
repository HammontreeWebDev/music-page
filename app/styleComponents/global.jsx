'use client';

import { Architects_Daughter } from 'next/font/google';
import { Josefin_Sans } from "next/font/google";

// store fonts in a variable and specify parameters
const architectsDaughter = Architects_Daughter({
  subsets: ['latin'],
  preload: true,
  weight: ['400'],
});

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  preload: true,
  weight: ['400'],
});

export default function Global() {
    return(
        <style jsx global>
        {
          `
                :root {
                    --title-text: ${architectsDaughter.style.fontFamily};
                    --body-text: ${josefinSans.style.fontFamily};
                }
                `
        }
      </style>
    )
} 