import { PropsWithChildren } from 'react';

const Highlight = (props: PropsWithChildren) => {
  return (
    <>
      <span>{props.children}</span>
      <style jsx>
        {`
          span {
            background: yellow;
            font-weight: bold;
            color: black;
          }
        `}
      </style>
    </>
  );
};

export default Highlight;
