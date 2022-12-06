import { ReactElement } from "react";

type Props = {
    children: ReactElement
}

const Content = (props: Props) => {
    const { children } = props;
    return <div className="w-full px-5">
        {children}
    </div>;
}

export default Content;