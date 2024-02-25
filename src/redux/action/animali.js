
export const POST_ANIMALE = "POST_ANIMALE";
export const GET_ANIMALI = "GET_ANIMALI";

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
              //  alert("Registrazione effettuato con successo!");
            } else {
                throw new Error("The POST ANIMALE  is fail!");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

 export const getAllAnimali = (token) => {
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
                console.log(data)
                dispatch({
                    type: GET_ANIMALI,
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