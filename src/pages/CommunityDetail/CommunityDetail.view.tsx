import styles from "./CommunityDetail.module.scss";
import Header from "../../components/Header";

import { ArrowTailIcon, ReportIcon } from "../../assets/icon";

import ContentHeader, {
  Props as ContentHeaderType,
} from "../../components/ContentHeader";

import ContentBody, {
  Props as ContentBodyType,
} from "../../components/ContentBody";
import CommunityFooter, {
  Props as CommunityFooterType,
} from "../../components/CommunityFooter";

export interface Props {
  contentHeader: ContentHeaderType;
  contentBody: ContentBodyType;
  footer: CommunityFooterType;
  onBackClick?: () => void;
  onOptionClick?: () => void;
}

const CommunityDetailView = ({
  contentHeader,
  contentBody,
  footer,
  onBackClick,
  onOptionClick,
}: Props) => {
  return (
    <div className={styles.container}>
      <Header
        title="게시물"
        left={<ArrowTailIcon />}
        right={<ReportIcon />}
        onLeftClick={onBackClick}
        onRightClick={onOptionClick}
      />
      <ContentHeader className={styles.header} {...contentHeader} />
      <ContentBody className={styles.content} {...contentBody} />
      <CommunityFooter {...footer} />
    </div>
  );
};

export default CommunityDetailView;
