import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Input } from "../../components/Input";
import { ApiStatus, IUpdateUserActionProps, IUserForm } from "./User.type";
import Style from "./UserFormStyle.module.css";
import {
  createUserAction,
  resetCreateListStatus,
  updateUserAction,
} from "./UserSlice";
import { useParams } from "react-router-dom";
import { toastError } from "../../components/ToastifyConfig";
interface IProps {
  isEditForm?: boolean;
}

const UserForm = (props: IProps) => {
  const { isEditForm } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const params = useParams();
  const userIdToEdit = useRef(parseInt(params.id || ""));

  const { list } = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    if (isEditForm && userIdToEdit.current) {
      // list of user
      const userData = list.filter((x) => x.id === userIdToEdit.current);

      if (userData.length) {
        setName(userData[0].name);
        setEmail(userData[0].email);
      }
    }
  }, [isEditForm]);

  const { createUserFormStatus, updateUserFormStatus } = useAppSelector(
    (state: RootState) => state.user
  );
  const dispatch = useAppDispatch();

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    const data: IUserForm = { name, email };

    if (name && email) {
      if (isEditForm) {
        const dirtyFormData: IUpdateUserActionProps = {
          id: userIdToEdit.current,
          data,
        };
        dispatch(updateUserAction(dirtyFormData));
      } else {
        const data: IUserForm = { name, email };
        dispatch(createUserAction(data));
      }
    } else {
      toastError("Please fill the form");
    }
  };

  useEffect(() => {
    if (createUserFormStatus === ApiStatus.success) {
      setName("");
      setEmail("");
      dispatch(resetCreateListStatus());
    }
  }, [createUserFormStatus]);

  return (
    <div className={Style.container}>
      <form className={Style.form} onSubmit={onSubmitForm}>
        <Input
          label="Name"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        />
        <Input
          label="Email"
          value={email}
          type="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
        />
        <div className={Style["btn-wrapper"]}>
          <input
            type="submit"
            value={isEditForm ? "Update" : "Create"}
            disabled={
              createUserFormStatus === ApiStatus.loading ||
              updateUserFormStatus === ApiStatus.loading
            }
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
