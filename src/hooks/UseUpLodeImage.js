import { useState } from 'react';

const UseUpLodeImage = (image) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [images, setImages] = useState("")

    setLoading(true)
    const formData = new FormData();
    formData.append("image", image);


    const url = `https://api.imgbb.com/1/upload?key=46aaf19b4e516e94653488331a5bff32`;
    fetch(url, {
        method: "POST",
        body: formData,
    })
        .then((res) => res.json())
        .then((result) => {
            setImages(result)
        })
        .catch(err => setError(err))

    return [images, loading, error]
};

export default UseUpLodeImage;