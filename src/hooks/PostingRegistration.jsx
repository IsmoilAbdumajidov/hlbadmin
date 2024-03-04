import { useMutation, useQueryClient } from "@tanstack/react-query"
import { instance } from "../api/axios"
import { addToLS } from "../utils/localStorage";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

export const useLogin = ({ navigate }) => {
    return useMutation((data) => instance.post("accounts/login/", data, {
    }),
        {
            onSuccess: (data) => {
                // console.log(data);
                // console.log(jwtDecode(`${data?.data?.access}`));
                if (jwtDecode(`${data?.data?.access}`)?.is_superuser) {
                    navigate("/", { replace: true })
                    addToLS("a-token", data?.data?.access)
                    addToLS("r-token", data?.data?.refresh)
                    toast.success("Kirish muvaffaqiyatli bajarildi");
                }
            },
            onError: (error) => {
                console.log(error);
                toast.error("Kirishda xatolik bor")
            }
        }
    )

}


