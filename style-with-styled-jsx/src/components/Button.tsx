import { PropsWithChildren } from 'react';

const Button = (props: PropsWithChildren) => {
  return (
    <>
      <button className="button">{props.children}</button>
      <style jsx>
        {`
          .button {
            padding: 1em;
            border-radius: 1em;
            border: none;
            background: green;
            color: white;
          }
        `}
      </style>
    </>
  );
};

export default Button;
