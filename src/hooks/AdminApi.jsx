import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { instance } from "../api/axios"
import { toast } from "react-toastify"

export const getCourseAdmin = () => {
    return useQuery(["courseAdmin"], () => instance.get(`admin/get_courses/`), {
        refetchOnWindowFocus: false,
        // onSuccess: (data) => console.log(data),
        onError: (error) => {
            toast.error("Qandaydir xatolik bor")
            console.log(error);
        }
    })
}

export const postCourse = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.post("admin/add_course/", data,

        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    ),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["courseAdmin"] });
                // console.log(data);
                // navigate('/user-page/my-kurs')
                toast.success("Yangi kurs qo'shildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}
export const postLesson = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.post("admin/add_lesson/", data,
    ),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["courseAdmin"] });
                // console.log(data);
                // navigate('/user-page/my-kurs')
                toast.success("Yangi dars qo'shildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}
export const patchCourse = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.patch(`admin/update_course/${data.id}/`, data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
        ,
    ),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["courseAdmin"] });
                // console.log(data);
                // navigate('/user-page/my-kurs')
                toast.success("Yangi dars qo'shildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}
export const patchLesson = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.patch(`admin/update_lesson/${data.id}/`, data,
    ),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["courseAdmin"] });
                // console.log(data);
                // navigate('/user-page/my-kurs')
                toast.success("Yangi dars qo'shildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}
export const deleteLesson = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.delete(`admin/delete_lesson/${data}/`,
    ),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["courseAdmin"] });
                // console.log(data);
                // navigate('/user-page/my-kurs')
                toast.success("Dars o'chirildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}
export const deleteCourse = () => {
    const queryClient = useQueryClient()
    return useMutation((data) => instance.delete(`admin/delete_course/${data}/`,
    ),
        {
            onSuccess: (data) => {
                queryClient.invalidateQueries({ queryKey: ["courseAdmin"] });
                // console.log(data);
                // navigate('/user-page/my-kurs')
                toast.success("Kurs o'chirildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}
export const getArticles = () => {
    return useMutation((data) => instance.get(`admin/get_articles/?course_id=${data.course}&lesson_id=${data.lesson}`,
    ),
        {
            onSuccess: (data) => {
                // console.log(data);
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

}
export const addArticle = () => {
    // const queryClient = useQueryClient()
    return useMutation((data) => instance.post("admin/add_article/", data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    ),
        {
            onSuccess: (data) => {
                // queryClient.invalidateQueries({ queryKey: ["courseAdmin"] });
                // console.log(data);
                // navigate('/user-page/my-kurs')
                toast.success("Yangi Article qo'shildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}

export const deleteArticle = () => {
    // const queryClient = useQueryClient()
    return useMutation((data) => instance.delete(`admin/delete_article/${data}/`,

    ),
        {
            onSuccess: (data) => {
                // queryClient.invalidateQueries({ queryKey: ["courseAdmin"] });
                // console.log(data);
                // navigate('/user-page/my-kurs')
                toast.success("Kurs o'chirildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}

export const patchArticle = () => {
    return useMutation((data) => instance.patch(`admin/update_article/${data.id}/`, data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    ),
        {
            onSuccess: (data) => {
                // console.log(data);
                toast.success("Article o'zgartiriladi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}

export const postQuiz = () => {
    return useMutation((data) => instance.post("admin/add_quiz/", data,
    ),
        {
            onSuccess: (data) => {
                // console.log(data);
                toast.success("Yangi quiz qo'shildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}

export const patchQuiz = () => {
    return useMutation((data) => instance.patch(`admin/update_quiz/${data.id}/`, data,
    ),
        {
            onSuccess: (data) => {
                // console.log(data);
                toast.success("Quiz o'zgartirildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}


export const deleteQuiz = () => {
    return useMutation((data) => instance.delete(`admin/delete_quiz/${data}/`,
    ),
        {
            onSuccess: (data) => {
                // console.log(data);
                toast.success("Quiz o'chirildi")
            },
            onError: (error) => {
                console.log(error);
                toast.error("Qandaydir xatolik bor")
            }
        }
    )

}