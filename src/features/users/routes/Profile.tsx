import { ContentLayout } from "@/components/Layout/ContentLayout";
import { useAuth } from "@/hooks/useAuth"

export const Profile = () => {
  // const { user } = useAuth();
  // if (!user) return null;
  return (
    <ContentLayout head="Profile">
      <ContentLayout.Nav title="User Information" />
    </ContentLayout>
  )
}