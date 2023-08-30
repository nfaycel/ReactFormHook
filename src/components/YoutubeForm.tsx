//const { name, ref, onChange, onBlur } = register("username")
//console.log("register:" + JSON.stringify(control));

import React, { useEffect, useState } from 'react';
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

    const [cUser, setCUser] = useState({
        username: "f.nouar",
        email: "m.mohamed@gmail.com",
        channel: "React Dev",
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

    useEffect(() => {
        Object.keys(cUser).forEach((fieldName) => {
            const castFieldName = fieldName as keyof typeof cUser;
            setValue(castFieldName, cUser[castFieldName]);
        });

    }, [cUser]);



    React.useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({ username: "", "email": "", channel: "" })
        }
    }, [formState, , reset])


    const onSubmit = (data: FormValues) => {
        console.log("Form submitted", data)
    }

    const changeCUser = () => {
        setCUser({ username: "faicel", email: "azer@yahoo.fr", channel: "azert" })
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
            <button className='mt-5' onClick={changeCUser}>change the user</button>
            <DevTool control={control} />
        </div>
    )
}
