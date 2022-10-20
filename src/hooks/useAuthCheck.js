import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLogedIn } from "../features/auth/authSlice";

const useAuthCheck = () => {
  const [authChecked, setAuthChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLogedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }

    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
};

export default useAuthCheck;
