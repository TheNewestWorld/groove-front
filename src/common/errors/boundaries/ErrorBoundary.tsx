import { useCallback } from "react";
import {
  ErrorBoundary as ReactErrorBoundary,
  FallbackProps,
} from "react-error-boundary";
import { useQueryErrorResetBoundary } from "react-query";
import { useLocation } from "react-router-dom";

type PropsWithChildren = React.PropsWithChildren<Record<string, unknown>>;

type Props = PropsWithChildren & {
  FallbackComponent: React.ComponentType<FallbackProps>;
};

/**
 * 진입한 화면 내에서 에러가 발생한 상황에서
 * 다른 화면(url이 변경됨)을 다시 진입 할 경우,
 * 변경된 url을 기준으로 다시 리렌더링을 실행하는 로직
 *
 * resetKeys의 값으로 현재 화면의 pathname (url)을 설정함으로써 가능
 * */

const ErrorBoundary = ({ FallbackComponent, children }: Props) => {
  const { isReset, reset } = useQueryErrorResetBoundary();
  const location = useLocation();

  const handleReset = useCallback(() => {
    if (!isReset()) {
      reset();
    }
  }, [isReset, reset]);

  return (
    <ReactErrorBoundary
      FallbackComponent={FallbackComponent}
      onReset={handleReset}
      resetKeys={[location.pathname]}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
