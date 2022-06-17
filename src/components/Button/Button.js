import React from 'react'

/*
CUSTOM BUTTON PROPERTY

# children digunakan dalam tag component yang berisikan teks dalam button tersebut contoh <Button> ClickMe! <Button/>
# props onClick sama seperti event click buntton pada umumnya, isikan dengan value function
# props type berisikan 3 nilai string "primary", "outline", "disable" nilai default adalah "primary"
# props style isikan dengan value object css property gunakan jika terpaksa untuk menggunakan pure css styling
contoh object css style ={color : "white"}
# props className layaknya className pada umumnya gunakan untuk menambahkan properti css baru di luar dari classname yang sudah ada
# Jika terdapat kesalahan, bug atau error dapat di cek codingannya
 */

function Button({children, onClick, type="primary", style, className}) {
  switch(type){
        case "primary" : {
            return(
                <button style={style} className={`cursor-pointer flex items-center justify-center bg-btnPrimary text-white rounded-md px-8 py-2 ${className}`} onClick={onClick}>{children}</button>
            )
        }

        case "outline" : {
            return(
                <button style={style} className={`cursor-pointer flex items-center justify-center bg-white border-2 border-btnPrimary text-black rounded-md px-8 py-2 ${className}`} onClick={onClick}>{children}</button>
            )
        }

        case "disable" : {
            return(
                <button style={style} className={`cursor-pointer flex items-center justify-center bg-btnDisable text-white rounded-md px-8 py-2 ${className}`} onClick={onClick} disabled>{children}</button>
            )
        }

        default : {
            return(
                <button style={style} className={`cursor-pointer flex items-center justify-center bg-btnPrimary text-white rounded-md px-8 py-2 ${className}`} onClick={onClick}>{children}</button>
            )
        }
    }
}

export default Button