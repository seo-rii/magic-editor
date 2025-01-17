import React from "react";
import { Editor } from "@tiptap/core";
import { useCallback } from "react";

import { Tooltip, BubbleMenu, Button, Space } from "../../../components";
import { IconEdit } from "../../../icons";
import { Excalidraw as ExcalidrawExtension } from "../excalidraw";

import { showExcalidrawEditor } from "./edit";

interface IProps {
  editor: Editor;
}

export const ExcalidrawBubbleMenu: React.FC<IProps> = ({ editor }) => {
  const shouldShow = useCallback(
    () => editor.isActive(ExcalidrawExtension.name),
    [editor]
  );

  const openEditModal = useCallback(() => {
    showExcalidrawEditor(editor);
  }, [editor]);

  return (
    <BubbleMenu editor={editor} shouldShow={shouldShow} forNode>
      <Space spacing={4}>
        <Tooltip editor={editor} title="编辑绘图">
          <Button size="small" icon={<IconEdit />} onClick={openEditModal} />
        </Tooltip>
      </Space>
    </BubbleMenu>
  );
};
