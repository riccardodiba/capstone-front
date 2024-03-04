
export const POST_ANIMALE = "POST_ANIMALE";
export const GET_ANIMALE = "GET_ANIMALE";
export const PUT_ANIMALE = "PUT_ANIMALE";

export const postAnimale = (token,animale) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/api/animale", {
                method: "POST",
                body: JSON.stringify(animale),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                dispatch({
                    type: POST_ANIMALE,
                    payload: data,
                });
              
            } else {
                throw new Error("The POST ANIMALE  is fail!");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const putAnimale = (token,uuid_animale,uuid_user) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/api/animale/"+uuid_animale, {
                method: "PUT",
                body: JSON.stringify(uuid_user),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                dispatch({
                    type: PUT_ANIMALE,
                    payload: data,
                });
              
            } else {
                throw new Error("The PUT ANIMALE  is fail!");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

 export const getAllAnimale = (token) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/api/animale",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
            if (response.ok) {
                const data = await response.json()
               
                dispatch({
                    type: GET_ANIMALE,
                    payload: data.content
                })

            } else {
                throw new Error("Error in data recovery ")
            }
        } catch (error) {
            console.log("Error", error)
        }
    }
}