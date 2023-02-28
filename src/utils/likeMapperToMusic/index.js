import { makeRequest } from "..";
import { GET_LIKES_BY_ID } from "../../constants/apiEndPoints";

const likeMapperToMusic = async (musicData, navigate) => {
  try {
    const likesData = await Promise.all(musicData.map((singleMusicData) => makeRequest(GET_LIKES_BY_ID(singleMusicData.id), navigate) ))
    const newMusicData = musicData.map((singleMusicData, index) => { return { ...singleMusicData, likes: likesData[index].data } });
    return newMusicData;
  } catch (error) {
    navigate(`/error/${error?.code}`);
  }
}

export default likeMapperToMusic;