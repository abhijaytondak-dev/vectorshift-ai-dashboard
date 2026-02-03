import React, { useState } from 'react'

const ERROR_IMG_SRC = 'data:image/svg+xml;base64,...';

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  // ...
  return <img {...props} />;
}
