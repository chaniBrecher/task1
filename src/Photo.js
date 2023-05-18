const Photo = ({ picture }) => {
    return <div>
        <h4>{picture.id}</h4>
        <h2>{picture.title}</h2>
        <img src={picture.thumbnailUrl} />
    </div>
}
export default Photo;