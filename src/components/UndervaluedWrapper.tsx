type Props = {
  undervaluedStyle: object;
  textToWrap: string | number;
};

const UndervaluedWrapper = (props: Props) => (
  <span style={props.undervaluedStyle}>{props.textToWrap}</span>
);

export default UndervaluedWrapper;
