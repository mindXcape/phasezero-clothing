type Props = {
  num1: number;
};

function Form(props: Props) {
  const { num1 } = props;
  return (
    <>
      <div>Hello</div>
      <div>{num1}</div>
    </>
  );
}

export default Form;
