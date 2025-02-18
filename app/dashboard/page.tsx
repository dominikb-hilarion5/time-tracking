import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function DashboardPage() {
  // This would typically come from your database or API
  const user = {
    name: "John Doe",
    workingHours: 120,
    totalWorkingHours: 160,
    vacationDays: 5,
    totalVacationDays: 20,
  }

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader user={user} />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Working Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={(user.workingHours / user.totalWorkingHours) * 100} />
                <p className="text-sm text-muted-foreground">
                  {user.workingHours} / {user.totalWorkingHours} hours this month
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Vacation Days</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={(user.vacationDays / user.totalVacationDays) * 100} />
                <p className="text-sm text-muted-foreground">
                  {user.vacationDays} / {user.totalVacationDays} days used
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

