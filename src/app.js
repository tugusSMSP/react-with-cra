import React from "react";
import { choice, remove } from "./helpers";
import { fruitsArr } from "./food";

class App extends React.Component{
    render(){
        const fruit = choice(fruitsArr)
        return(
            <div>
                <h1>Selamat datang di Toko Buah, Selamat Berbelanja</h1>
                <div>
                    <span>aku mau buah {fruit} dong</span><br/>
                    <span>silahkan, ini {fruit} nya</span><br/>
                    <span>wahh, enak banget..., ada lagi ga?</span><br/>
                    <span>sayang sekali buahnya sudah habis, 
                        kami hanya memiliki {remove(fruitsArr, fruit)} buah yang tersisa
                    </span>
                </div>
            </div>

        )
    }
}

export default App;