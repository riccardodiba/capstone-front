
export const POST_REGISTER = "POST_REGISTER";
export const POST_LOGIN = "POST_LOGIN";

export const postRegister = (register) => {
    return async (dispatch) => {
        try {
            const res = await fetch("http://localhost:3001/auth/register", {
                method: "POST",
                body: JSON.stringify(register),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                dispatch({
                    type: POST_REGISTER,
                    payload: data,
                });
                  localStorage.setItem("my_uuid",data.uuid);
            } else {
                throw new Error("The login is fail!");
            }
        } catch (error) {
            console.log(error);
        }
    };
};

export const postRegisterAdmin = (register) => {
  return async (dispatch) => {
    try {
      const res = await fetch("http://localhost:3001/auth/register/admin", {
        method: "POST",
        body: JSON.stringify(register),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch({
          type: POST_REGISTER,
          payload: data.content,
        });
      
      } else {
        throw new Error("The login is fail!");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const postLogin = (login) => {
  return async (dispatch) => {
    console.log(login)
    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        dispatch({
          type: POST_LOGIN,
          payload: { token: data.token, role: data.role },
        });
        localStorage.setItem("token", data.token);
        localStorage.setItem("my_uuid", data.my_uuid);

      } else {
        throw new Error("The login is fail!");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};


