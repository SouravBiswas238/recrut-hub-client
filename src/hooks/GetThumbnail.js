
const GetThumbnail = (url) => {

    var p =
        /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    const videoId = url.match(p) ? RegExp.$1 : false;
    const thumbnailImg = `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

    return thumbnailImg;

};

export default GetThumbnail;