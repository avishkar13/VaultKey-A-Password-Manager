import React from 'react';
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const passRef = useRef();
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords));
        }

    }, [])

    const showPassword = () => {
        // passwordRef.current.type = "text";
        if (ref.current.src.includes("icons/eyeclose.svg")) {
            ref.current.src = "icons/eye.svg"
            passwordRef.current.type = "password";
        } else {
            ref.current.src = "icons/eyeclose.svg"
            passwordRef.current.type = "text";
        }
    }

    const savePassword = () => {
        if(form.site.length>1 && form.username.length>1 && form.password.length>1){
            toast.success('Saved Successfully!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
            localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
            setform({ site: "", username: "", password: "" })
        }
        else{
            toast.success('Error:Please Check Credentials!!', {
                position: "top-right",
                autoClose: 4000,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    }

    const deletePassword = (id) => {
        const c = confirm("Do you want to delete this password?")
        if (c) {
            toast.success('Password Deleted!!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            setpasswordArray(passwordArray.filter(item => item.id !== id));
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)));
        }
    }

    const editPassword = (id) => {
        console.log("Edited password with id:", id);
        setform(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id));
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const copyText = (text) => {
        toast.success('Copied To Clipboard!!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='w-full'>
            <div className="absolute top-0 -z-10 h-[150vh] w-[150vw] md:h-[100vh] md:w-[100vw] bg-white overflow-hidden">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[110vh] w-[135vw] md:h-[80vh] md:w-[85vw] translate-x-[-5%]  md:-translate-x-[10%] translate-y-[5%] rounded-xl bg-[green] opacity-25 blur-[80px]"></div>
            </div>
            </div>

            <div className='w-[150%] md:mycontainer mt-28  md:mt-20 '>
                <div className="mx-auto">
                    <h1 className='text-4xl font-bold text-center my-2 '>
                        <span className='text-green-500'>&lt; </span>
                        Vault
                        <span className='text-green-500'>Key /&gt;</span></h1>
                    <p className='text-green-900 text-center text-lg my-2 font-mono font-thin'>Your Own Password Manager</p>
                    <div className="flex flex-col p-4 gap-8 items-center">
                        <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border w-full p-4 py-1 border-green-500 opacity-80' type="text" name='site' id='site' required />
                        <div className="flex flex-col md:flex-row justify-between w-full gap-8">
                            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border w-full  md:w-[73vw] p-4 py-1 border-green-500 opacity-80' type="text" name='username' id='username' required autoComplete='true' />
                            <div className="relative flex items-center">
                                <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border w-full md:w-[27vw]  p-5  py-1 border-green-500 opacity-80' type="password" name='password' id='password' required/>
                                <span className="absolute cursor-pointer right-[10px] top-0" onClick={showPassword}>
                                    <img ref={ref} className='py-1 ' width={25} src="icons/eye.svg" alt="eye" />
                                </span>
                            </div>
                        </div>

                        <button ref={passRef} onClick={savePassword} className='flex gap-2 justify-center items-center
                     font-bold font-serif bg-green-500 hover:bg-green-400 rounded-full px-4 py-2 w-fit h-11 border border-green-800'>
                            <img src="icons/add.svg" alt="" />Save</button>
                    </div>
                </div>
                <div className="passwords p-2 md:p-0">
    <h2 className="font-bold text-xl py-4">Your Passwords</h2>

    {passwordArray.length === 0 && <div>No passwords to show</div>}

    {passwordArray.length !== 0 && (
        <div className="">
            <table className="table-auto w-full rounded-md overflow-hidden font-mono text-sm mb-10">
                <thead className="bg-green-800 text-white">
                    <tr>
                        <th className="py-2 w-1/3 md:w-1/2">Site</th>
                        <th className="py-2 w-1/5">Username</th>
                        <th className="py-2 w-1/5">Password</th>
                        <th className="py-2 w-1/12">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-green-100">
                    {passwordArray.map((item, index) => (
                        <tr key={index}>
                            <td className="border border-white py-2 text-center px-2 md:px-4 break-words">
                                <div className="flex justify-between items-center">
                                    <a href={item.site} target="_blank" rel="noreferrer" className="break-all px-2">{item.site}</a>
                                    <img className="h-4 md:h-5 cursor-pointer" src="icons/copy.svg" alt="copy" onClick={() => { copyText(item.site) }} />
                                </div>
                            </td>

                            <td className="border border-white py-2 text-center px-2 md:px-4 break-words">
                                <div className="flex justify-between items-center">
                                    <span className="break-all px-2">{item.username}</span>
                                    <img className="h-4 md:h-5 cursor-pointer" src="icons/copy.svg" alt="copy" onClick={() => { copyText(item.username) }} />
                                </div>
                            </td>

                            <td className="border border-white py-2 text-center px-2 md:px-4 break-words">
                                <div className="flex justify-between items-center">
                                    <span className="break-all px-2 ">{item.password}</span>
                                    <img className="h-4 md:h-5 cursor-pointer" src="icons/copy.svg" alt="copy" onClick={() => { copyText(item.password) }} />
                                </div>
                            </td>

                            <td className="border border-white py-2 text-center px-2">
                                <div className="flex justify-center gap-1">
                                    <span><img className="h-4 md:h-5 cursor-pointer" src="icons/edit.svg" alt="Edit" onClick={() => { editPassword(item.id) }} /></span>

                                    <span><img className="h-4 md:h-5 cursor-pointer" src="icons/delete.svg" alt="Delete" onClick={() => { deletePassword(item.id) }} /></span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )}
</div>



            </div>
        </>
    )
}

export default Manager
