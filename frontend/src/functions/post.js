import axios from "axios";
export const createPost = async (
  type,
  background,
  text,
  images,
  user,
  token
) => {
  try {
    const { data } = await axios.post(
      `api1/createPost`,
      {
        type,
        background,
        text,
        images,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return {status: "ok", data};
  } catch (error) {
    return error.response.data.message;
  }
};
export const reactPost = async (postRef, react, token) => {
  try {
    const { data } = await axios.put(
      `/api1/postReact`,
      {
       postRef,
        react, 
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(data)
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};

export const getReacts = async (postId, token) => {
  try {
    const { data } = await axios.get(
      `api1/getReacts/${postId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(data)
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};


export const comment = async (postId, comment, image, token) => {
  try {
    const { data } = await axios.put(
      `api1/comment`,
      {
        postId, comment, image
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};

