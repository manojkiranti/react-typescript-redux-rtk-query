import { Head } from "../Head";

type ContentLayoutProps = {
  children: React.ReactNode;
  head: string;
};


export const ContentLayout = ({ children, head }: ContentLayoutProps) => {
  return (
    <>
      <Head title={head} />
      {children}
    </>
  )
}

type NavProps = {
  children?: React.ReactNode;
  title: string;
}
ContentLayout.Nav = (props: NavProps) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="page-title-box">
          <h4 className="page-title">{props.title}</h4>
        </div>
      </div>
      <div className="col-md-6">
        {props?.children}
      </div>
    </div>
  )
}

type ChildProps = {
  children: React.ReactNode;
}
ContentLayout.Body = (props: ChildProps) => {
  return (
    <>
      {props.children}
    </>
  )
}
