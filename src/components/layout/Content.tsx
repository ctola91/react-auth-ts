import { ReactElement } from "react";

type Props = {
    children: ReactElement
}

const Content = (props: Props) => {
    const { children } = props;
    return <div className="container">
        {children}
    </div>;
}

export default Content;