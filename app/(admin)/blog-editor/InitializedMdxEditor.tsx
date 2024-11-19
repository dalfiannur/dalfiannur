"use client";
// InitializedMDXEditor.tsx
import type { ForwardedRef } from "react";
import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  markdownShortcutPlugin,
  MDXEditor,
  type MDXEditorMethods,
  type MDXEditorProps,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  linkPlugin,
  linkDialogPlugin,
  codeBlockPlugin,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  ShowSandpackInfo,
  InsertCodeBlock,
  InsertSandpack,
  sandpackPlugin,
  codeMirrorPlugin,
  diffSourcePlugin,
  DiffSourceToggleWrapper,
  jsxPlugin,
  DialogButton,
  ButtonOrDropdownButton,
  BlockTypeSelect,
  ChangeAdmonitionType,
  directivesPlugin,
  AdmonitionDirectiveDescriptor,
  InsertAdmonition,
  CodeToggle,
  CreateLink,
  InsertFrontmatter,
  frontmatterPlugin,
  imagePlugin,
  InsertImage,
  InsertTable,
  tablePlugin,
  InsertThematicBreak,
  ListsToggle,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { jsxComponentDescriptors } from "./_components";

// Only import this to the next file
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return (
    <MDXEditor
      plugins={[
        diffSourcePlugin({
          diffMarkdown: "An older version",
          viewMode: "rich-text",
        }),
        linkPlugin(),
        linkDialogPlugin(),
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        markdownShortcutPlugin(),
        codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor],
        }),
        frontmatterPlugin(),
        imagePlugin(),
        tablePlugin(),
        sandpackPlugin({
          sandpackConfig: {
            defaultPreset: "react",
            presets: [
              {
                label: "React",
                name: "react",
                meta: "live react",
                sandpackTemplate: "react",
                sandpackTheme: "light",
                snippetFileName: "/App.js",
                snippetLanguage: "jsx",
              },
            ],
          },
        }),
        codeMirrorPlugin({
          codeBlockLanguages: { js: "JavaScript", css: "CSS" },
        }),
        jsxPlugin({ jsxComponentDescriptors }),
        thematicBreakPlugin(),
        toolbarPlugin({
          toolbarClassName: "my-classname",
          toolbarContents: () => (
            <>
              <BlockTypeSelect />
              <BoldItalicUnderlineToggles />
              <CodeToggle />
              <ListsToggle />
              <CreateLink />
              <ConditionalContents
                options={[
                  {
                    when: (editor) => editor?.editorType === "codeblock",
                    contents: () => <ChangeCodeMirrorLanguage />,
                  },
                  {
                    when: (editor) => editor?.editorType === "sandpack",
                    contents: () => (
                      <div>
                        <ShowSandpackInfo />
                        OKE
                      </div>
                    ),
                  },
                  {
                    when: (editor) => editor?.editorType === "admonition",
                    contents: () => <ChangeAdmonitionType />,
                  },
                  {
                    fallback: () => (
                      <>
                        <InsertCodeBlock />
                        <InsertAdmonition />
                        <InsertFrontmatter />
                        <InsertImage />
                        <InsertSandpack />
                        <InsertTable />
                        <InsertThematicBreak />
                      </>
                    ),
                  },
                ]}
              />
              <DiffSourceToggleWrapper>
                <UndoRedo />
              </DiffSourceToggleWrapper>
            </>
          ),
        }),
      ]}
      {...props}
      ref={editorRef}
    />
  );
}
