import { PulseLoader } from "react-spinners";
import * as S from './styled';

function Loading() {
    return (
        <S.LoadingContainer>
            <PulseLoader color="#E5E4E2" />
        </S.LoadingContainer>
    );
}

export default Loading;