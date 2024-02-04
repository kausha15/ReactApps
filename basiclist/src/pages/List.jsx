import { useEffect, useState } from "react";

function List(){
    const [images, setImages] = useState([]);
    const [single, setSingle] = useState("");

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos").then(res => res.json()).then(data => 
        {   
            console.log(data);
            let obj = Object.values(data);
            obj.splice(5);
            setImages(obj)
            console.log("images "+images)
    });
    },[])

    function handleClick(i){
        setSingle(images[i].thumbnailUrl);
    }

    return(
        <div>
            <img src={single}/>
            <h1>Image List Component</h1>
            {images.map((image,i)=>(
                <img src={image.thumbnailUrl} key={i} onClick={()=>handleClick(i)}/>
            ))}
        </div>
    )

}

export default List;