//const { name, ref, onChange, onBlur } = register("username")
//console.log("register:" + JSON.stringify(control));

import React, { useEffect } from 'react';
import { useForm } from "react-hook-form"
import { DevTool } from "@hookform/devtools"

let renderCount = 0;

type FormValues = {
    username: string;
    email: string;
    channel: string;
};

export const YouTubeForm = () => {

    const [mUser, setmUser] = React.useState({
        username: "Nouar",
        channel: "React Dev",
        email: "nfaical3@gmail.com"
    })


    const {
        register,
        control,
        handleSubmit,
        reset,
        setValue,
        formState,
        //formState: { isSubmitSuccessful },
    } = useForm<FormValues>({
        defaultValues: mUser
    })

    React.useEffect(() => {
        const fetchedData = {
            username: "f.nouar",
            email: "m.mohamed@gmail.com",
            channel: "React Dev",
          };
        
          Object.keys(fetchedData).forEach((fieldName) => {
            const castFieldName = fieldName as keyof typeof fetchedData;
            setValue(castFieldName, fetchedData[castFieldName]);
          });

    }, []);


    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ username: "", "email": "", channel: "" })
        }
    }, [formState, , reset])


    const onSubmit = (data: FormValues) => {
        console.log("Form submitted", data)
    }

    renderCount++
    return (
        <div>
            <h1>YouTube Form ({renderCount / 2})</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register("username")} />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" {...register("email")} />

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel"  {...register("channel")} />

                <button>Submit</button>
            </form>

            <DevTool control={control} />
        </div>
    )
}
