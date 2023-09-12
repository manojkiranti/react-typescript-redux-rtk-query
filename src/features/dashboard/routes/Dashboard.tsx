import { ContentLayout } from "@/components/Layout/ContentLayout"

export const Dashboard = () => {
  return (
    <>
      <ContentLayout head="Dashboard">
        <ContentLayout.Nav title="Dashboard">

        </ContentLayout.Nav>
        <ContentLayout.Body>
          <h1>Body</h1>
        </ContentLayout.Body>
      </ContentLayout>
    </>
  )
}