const Photo = (props) => {
    return (
      <>
        <li>
        <li>
            <img src={props.url} alt={props.alt} />
          </li>
        </li>
      </>     
    );
};

export default Photo;