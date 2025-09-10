import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageSquare, Download, Calendar } from "lucide-react"
import DashboardLayout from "@/components/layout/dashboard-layout"

export default function PublicUserProfile() {
  return (
      <DashboardLayout userRole="public">
        <div className="space-y-6">
          {/* Overview Section */}
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My Profile</h1>
            <p className="text-muted-foreground">Manage your public profile and activity</p>
          </div>

          {/* Activity Overview */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Downloads</CardTitle>
                <Download className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Papers downloaded</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Comments</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Discussions participated</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Saved Papers</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Papers bookmarked</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Member Since</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">6mo</div>
                <p className="text-xs text-muted-foreground">Active member</p>
              </CardContent>
            </Card>
          </div>

          {/* Profile Information */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Your public profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">JD</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">John Doe</h3>
                  <p className="text-muted-foreground">Independent Researcher</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Research Interests</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Data Science</Badge>
                  <Badge variant="secondary">Computer Vision</Badge>
                  <Badge variant="secondary">AI Ethics</Badge>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Bio</h4>
                <p className="text-muted-foreground">
                  Passionate about exploring the intersection of artificial intelligence and ethical computing. Interested
                  in contributing to open research and academic discussions.
                </p>
              </div>

              <Button>Edit Profile</Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest interactions on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Download className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm">Downloaded &quot;Deep Learning Fundamentals&quot;</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm">Commented on &quot;Neural Network Architectures&quot;</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm">Saved &quot;Ethical AI Considerations&quot;</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
  )
}