import { FallbackProps } from "react-error-boundary";
import { ErrorBoundary } from ".";

type Props = React.PropsWithChildren<Record<string, unknown>>;

/**
 * ErrorBoundary를 이용하여 각 에러 상태에 맞는 화면을
 * FallbackComponent로 설정하는 로직
 *
 * 모든 화면의 최상단에 위치하여, 에러 화면 노출 로직을 한 번에 설정가능
 * */

const GlobalErrorBoundary = ({ children }: Props) => {
  const FallbackComponent = ({ error }: FallbackProps) => {
    // TODO: error 객체의 종류를 구분하여 각 에러 상태에 맞는 화면을 return
    // API 요청 에러 외의 에러 안내 화면을 구분
    return <>에러가 발생하였습니다.</>;
  };

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      {children}
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
