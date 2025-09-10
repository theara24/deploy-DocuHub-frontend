import PublicUserProfile from '@/components/profiles/public-user-profile';

// This would typically fetch user data from an API
async function getUserData(id: string) {
  // Mock data - in a real app, this would be fetched from your database
  return {
    id,
    name: 'John Doe',
    title: 'Independent Researcher',
    bio: 'Passionate about exploring the intersection of artificial intelligence and ethical computing. Interested in contributing to open research and academic discussions.',
    researchInterests: [
      'Machine Learning',
      'Data Science',
      'Computer Vision',
      'AI Ethics',
    ],
    joinDate: 'June 2023',
    stats: {
      downloads: 24,
      comments: 8,
      savedPapers: 12,
    },
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      orcid: 'https://orcid.org/0000-0000-0000-0000',
      website: 'https://johndoe.com',
      twitter: 'https://twitter.com/johndoe',
    },
    isPublic: true,
  };
}

export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUserData(id);

  return <PublicUserProfile user={user} />;
}
