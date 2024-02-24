const Button = (props) => {
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  <div className="bg-container">
    <div className="content-container">
      <h1 className="heading">Social Buttons</h1>
      <div className="card-container">
        <Button className="like" buttonText="Like">
          Like
        </Button>
        <Button className="comment" buttonText="Comment">
          Comment
        </Button>
        <Button className="share" buttonText="Share">
          Share
        </Button>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
