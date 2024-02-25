import { useMutation, useQueryClient } from "@tanstack/react-query"
import { instance } from "../api/axios"
import { addToLS } from "../utils/localStorage";
import { toast } from "react-toastify";
// import { jwtDecode } from "jwt-decode";

export const postingRegister = ({ navigate }) => {
    return useMutation((data) => instance.post("accounts/register/", data, {
    }),
        {
            onSuccess: (data) => {
                console.log(data);
                addToLS("a-token", data?.data?.access_token)
                addToLS("r-token", data?.data?.refresh_token)
                navigate("/")
                toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz")
                
            },
            onError: (error) => {
                console.log(error);
                toast.error("Kirishda xatolik bor")
            }
        }
    )

}

export const useLogin = ({ navigate }) => {
    return useMutation((data) => instance.post("accounts/login/", data, {
    }),
        {
            onSuccess: (data) => {
                console.log(data);
                // console.log(jwtDecode(`${data?.data?.access}`));
                addToLS("a-token", data?.data?.access)
                addToLS("r-token", data?.data?.refresh)
                navigate("/", { replace: true })
                toast.success("Kirish muvaffaqiyatli bajarildi");
            },
            onError: (error) => {
                console.log(error);
                toast.error("Kirishda xatolik bor")
            }
        }
    )

}


