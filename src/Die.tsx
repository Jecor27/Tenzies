import type { CSSProperties, JSX, MouseEventHandler } from "react";

type DieProps = {
    hold: MouseEventHandler
    isHeld: boolean
    value:string

}

export default function Die(props: DieProps): JSX.Element {
  const styles: CSSProperties = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <button
      style={styles}
      onClick={props.hold}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
    >
      {props.value}
    </button>
  );
}
