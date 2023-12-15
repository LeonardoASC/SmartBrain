import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

const ImageLinkForm = ({ onInputChange, onButtonSubmit, onInputClear }) => {
    const [input, setInput] = useState(''); // Estado local para controlar o input

    const handleChange = (event) => {
        setInput(event.target.value);
        onInputChange(event);
    };

    const handleClearInput = () => {
        setInput(''); // Limpa o estado local do input
        onInputClear(); // Chama a função prop para limpar a imagem e qualquer outro estado relevante
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onButtonSubmit();
    };

    return (
        <div className="w-full flex justify-center items-center">
            <div className="flex flex-col gap-4 backdrop-blur-md p-4 rounded-full w-[75%]">
                <p className="text-center text-5xl text-white">Magic Brain Detect</p>
                <p className="text-center text-white">Put a link below to detect if there is a face in the photo</p>
                <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2 ">
                    <div className="flex items-center justify-center rounded-xl w-full gap-3 ">
                        <input
                            placeholder="Image Link"
                            type="text"
                            value={input}
                            className="p-2 w-[70%] text-center rounded-xl border-2 border-cyan-600  "
                            onChange={handleChange}
                        />
                        {input && (
                            <div className="bg-white rounded-full flex items-center justify-center cursor-pointer  ">
                                <button
                                    type="button"
                                    onClick={handleClearInput}
                                    className="text-cyan-600 text-3xl  "
                                >
                                    <MdOutlineCancel />
                                </button>
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="transition ease-in-out delay-150 bg-cyan-600 hover:-translate-y-1 hover:scale-110
                        hover:bg-purple-500 duration-300 text-3xl p-5 rounded-2xl text-white cursor-pointer"
                    >
                        Detect Now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ImageLinkForm;
