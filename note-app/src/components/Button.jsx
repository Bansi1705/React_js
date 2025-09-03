export const Button = ({ btnText, deleteHandler }) => {
  return (
    <div>
      <button onClick={deleteHandler}>{btnText}</button>
    </div>
  );
};
