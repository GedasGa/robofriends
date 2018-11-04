import * as React from 'react';

type Props = {
    children?: JSX.Element
}

const Scroll = (props: Props) => {
   return (
       <div style={{overflowY: 'scroll', border: '3px solid black', height: '800px'}}>
           {props.children}
       </div>
   );
};

export default Scroll;