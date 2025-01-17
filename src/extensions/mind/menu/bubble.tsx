import React, { useCallback } from "react";

import { IconCopy, IconDelete, IconEdit } from "../../../icons";
import {
  BubbleMenu,
  Tooltip,
  Divider,
  Button,
  Space
} from "../../../components";
import { useAttributes } from "../../../hooks";
import { copyNode, deleteNode } from "../../../utilities";
import { IMindAttrs, Mind } from "../mind";

import { showMindEditor } from "./edit";

export const MindBubbleMenu = ({ editor }) => {
  const attrs = useAttributes<IMindAttrs>(editor, Mind.name, {
    width: 0,
    height: 0,
    data: "",
    svg: ""
  });

  const shouldShow = useCallback(() => editor.isActive(Mind.name), [editor]);

  const copyMe = useCallback(() => copyNode(editor, Mind.name), [editor]);

  const deleteMe = useCallback(() => deleteNode(editor, Mind.name), [editor]);

  const openEditModal = useCallback(() => {
    showMindEditor(editor);
  }, [editor]);

  return (
    <BubbleMenu
      className={"bubble-menu"}
      editor={editor}
      pluginKey="mind-bubble-menu"
      shouldShow={shouldShow}
      forNode>
      <Space spacing={4}>
        <Tooltip editor={editor} title="复制">
          <Button onClick={copyMe} icon={<IconCopy />} size="small" />
        </Tooltip>

        <Tooltip editor={editor} title="编辑">
          <Button size="small" icon={<IconEdit />} onClick={openEditModal} />
        </Tooltip>

        <Divider />

        <Tooltip editor={editor} title="删除">
          <Button onClick={deleteMe} icon={<IconDelete />} size="small" />
        </Tooltip>
      </Space>
    </BubbleMenu>
  );
};
