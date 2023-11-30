import React, { useState, useCallback, useEffect } from 'react';
import "./passwordg.css";

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const pass234 = useCallback(() => {
        let pass = " ";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*~?";

        for (let i = 1; i <= length; i++)
        {

            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
            
        }
        setPassword(pass);
    }, [length, numberAllowed, charAllowed]);

    useEffect(() => {
        pass234();
    }, [length, numberAllowed, charAllowed, pass234]);

    return (
        <div>
            <div className='w-full max-w-md mx-auto shodow-md rounded-lg px-4 my-8 text-orange-500'>
                <div className="INPUT">
                    <input className='input' type="text" value={password} placeholder="password" readOnly />
                    <button className='copy bg-blue-700 '>copy</button>
                </div>
                <div className="secondinput">
                    <input type="range" min={7} max={100} value={length} onChange={(e) => setLength(Number(e.target.value))} />
                    <label>length: {length}</label>
                </div>
                <div className="thirdinput">
                    <input type="checkbox" checked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
                    <label>numbers</label>
                </div>
                <div className="fourinput">
                    <input type="checkbox" checked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
                    <label>char</label>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenerator;
