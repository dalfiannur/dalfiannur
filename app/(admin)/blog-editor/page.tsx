"use client";

import { useRef } from "react";
import { ForwardRefEditor } from "./ForwardRefEditor";
import { MDXEditorMethods } from "@mdxeditor/editor";

export default function Page() {
  const ref = useRef<MDXEditorMethods>(null);
  return (
    <ForwardRefEditor
      ref={ref}
      markdown="# Hello World"
      onChange={(value) => console.log(value)}
    />
  );
}
