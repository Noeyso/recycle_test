import Button from "../button/Button";
import { RiKakaoTalkFill } from "react-icons/ri";
const KakaoShareButton = () => {
  const createKakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      kakao.Link.sendScrap({
        requestUrl: "https://recycle-test.netlify.app",
        templateId: 80934,
      });
    }
  };
  return (
    <Button onClick={createKakaoButton}>
      <RiKakaoTalkFill size="2rem" />
      <span> 공유하기</span>
    </Button>
  );
};
export default KakaoShareButton;
