import { isDefinedFn } from "src/functions/isDefined";
import IconEdit from "assets/icons/icon-edit.svg?react";
import IconSave from "assets/icons/icon-ok.svg?react";
import IconCancel from "assets/icons/icon-cancel.svg?react";
import s from "./editButton.module.scss";


type EditButtonProps = {
  isEditing: boolean;
  editHandler?: () => void;
  saveHandler?: () => void;
  cancelHandler?: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ isEditing, editHandler, saveHandler, cancelHandler}) => {
  const edit = () => {
    if (isDefinedFn(editHandler) && editHandler) {
      editHandler();
    }
  }

  const editSave = () => {
    if (isDefinedFn(saveHandler) && saveHandler) {
      saveHandler();
    }
  }

  const editCancel = () => {
    if (isDefinedFn(cancelHandler) && cancelHandler) {
      cancelHandler();
    }
  }

  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        {
          !isEditing ?
          <div className={s.btn}>
            <button className={s.button} onClick={edit}>
              <span className={s.buttonInner}>
                <IconEdit />
              </span>
            </button>
          </div> :
          <>
            <div className={s.btn}>
              <button className={s.button} onClick={editSave}>
                <span className={s.buttonInner}>
                  <IconSave />
                </span>
              </button>
            </div>
            <div className={s.btn}>
              <button className={s.button} onClick={editCancel}>
                <span className={s.buttonInner}>
                  <IconCancel />
                </span>
              </button>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default EditButton;