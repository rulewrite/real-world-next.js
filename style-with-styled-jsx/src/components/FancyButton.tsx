import { PropsWithChildren } from 'react';

const FancyButton = (props: PropsWithChildren) => {
  return (
    <>
      <button className="button">{props.children}</button>
      <style jsx>
        {`
          .button {
            padding: 2em;
            border-radius: 2em;
            border: 2px solid pink;
            background: purple;
            color: white;
            font-size: bold;
          }
        `}
      </style>
    </>
  );
};

export default FancyButton;
