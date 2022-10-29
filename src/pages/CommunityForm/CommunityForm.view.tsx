import { useState } from "react";
import styles from "./CommunityForm.module.scss";

import Header from "../../components/Header";
import Input from "../../components/Input";
import RoundButton from "../../components/RoundButton";

import { ArrowIcon } from "../../assets/icon";
import SelectCategory from "../../components/SelectCategory";

export interface Props {
  categoryList: string[];
  onClickCreate: () => void;
  onClickClose: () => void;
}

const CommunityFormView = ({
  categoryList,
  onClickClose,
  onClickCreate,
}: Props) => {
  const [isEnable, setEnable] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Header
        title="게시물 작성하기"
        left={<ArrowIcon />}
        onClickLeft={onClickClose}
      />

      <div className={styles.body}>
        <SelectCategory
          className={styles.category}
          title="카테고리"
          placeholder="카테고리를 선택해주세요."
          categoryList={categoryList}
          onClickCategory={(category: string) => {
            return category;
          }}
          activeCategory=""
        />
        <div className={styles.title}>
          <Input label="제목" placeholder="제목을 입력해주세요." />
        </div>
        <div className={styles.content}>
          <Input label="내용" placeholder="내용을 입력해주세요." />
        </div>

        <RoundButton
          className={styles.button}
          onClick={onClickCreate}
          disabled={isEnable}
          colorTheme="dark">
          등록하기
        </RoundButton>
      </div>
    </div>
  );
};

export default CommunityFormView;
